import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Presence, PresenceDto } from "./presence.entity";
import { Cours } from "../Cours/cours.entity";
import { Etudiant } from "../Utilisateur/Etudiant/etudiant.entity";

@Injectable()
export class PresenceService {
    constructor(
        @InjectRepository(Presence) private presenceRepository : Repository<Presence>,
        @InjectRepository(Cours) private coursRepo: Repository<Cours>,
        @InjectRepository(Etudiant) private etudiantRepo: Repository<Etudiant>,
    ) {}

  private readonly LAT = -21.455161785998023;
  private readonly LON =47.09337354447188;
  private readonly MAX_DISTANCE = 150;


  async getAllPresence(): Promise<Presence[]> {
    return this.presenceRepository.find({ relations: ['cours', 'etudiant'] });
  }

  //presence pendant un cours
  async getAllPresenceForSpecificCours(id_matiere: number, id_niveau: string, id_parcours: number, id_salle: string, cours_debut: Date): Promise<Presence[]> {  
    return this.presenceRepository.find({
      where: {
        cours: {
          id_matiere,
          id_niveau,
          id_parcours,
          id_salle,
          cours_debut,
        },
      },
      relations: ['cours', 'etudiant'],
    });
  }

  //Listes des absents
  async getAllMissedEtudiantDuringOneCours(id_matiere: number, id_niveau: string, id_parcours: number, id_salle: string, cours_debut: Date): Promise<Etudiant[]> {
    return this.etudiantRepo.createQueryBuilder('etudiant')
    .leftJoin(
      'presence',
      'presence',
      'etudiant.id_etudiant = presence.id_etudiant AND presence.id_cours = :idCours AND presence.date = :date',
      { id_matiere, id_niveau, id_parcours, id_salle, cours_debut },
    )
    .where('presence.id_etudiant IS NULL')
    .getMany();
  }


  async enregistrer(dto: PresenceDto) {
    const cours = await this.coursRepo.findOneBy({ id_matiere: dto.id_matiere,
        id_niveau: dto.id_niveau,
        id_parcours: dto.id_parcours,
        id_salle: dto.id_salle,
        cours_debut: dto.cours_debut, });
    if (!cours || cours.qrCodeToken !== dto.token) {
      throw new UnauthorizedException('QR invalide');
    }

    const distance = this.calculerDistance(this.LAT, this.LON, dto.latitude, dto.longitude);
    if (distance > this.MAX_DISTANCE) {
      throw new BadRequestException('Hors zone autorisée');
    }

    const etudiant = await this.etudiantRepo.findOneBy({ matricule: dto.etudiantId });
    if (!etudiant) {
      throw new BadRequestException('Étudiant introuvable');
    }
    const presence = this.presenceRepository.create({ cours, etudiant, dateHeureScan: new Date() });
    return await this.presenceRepository.save(presence);
  }

  private calculerDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const toRad = (x: number) => (x * Math.PI) / 180;
    const R = 6371e3;
    const φ1 = toRad(lat1), φ2 = toRad(lat2);
    const Δφ = toRad(lat2 - lat1);
    const Δλ = toRad(lon2 - lon1);
    const a = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
  }


}