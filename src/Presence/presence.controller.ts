import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { PresenceService } from "./presence.service";
import { Presence, PresenceDto } from "./presence.entity";
import { Etudiant } from "../Utilisateur/Etudiant/etudiant.entity";

@Controller('presence')
export class PresenceController {
    constructor(private presenceService : PresenceService) { }

    @Get()
    async getAllPresence() : Promise<Presence[]> {
        return this.presenceService.getAllPresence();
    }

    @Get('PresenceForSpecificCours')
    async getAllPresenceForSpecificCours(@Body() id_matiere: number, id_niveau: string, id_parcours:number, id_salle: string, cours_debut : Date) : Promise<Presence[]> {
        return this.presenceService.getAllPresenceForSpecificCours(id_matiere, id_niveau, id_parcours, id_salle, cours_debut);
    }

    @Get('MissedList')
    async getAllMissedEtudiantDuringOneCours(id_matiere: number, id_niveau: string, id_parcours: number, id_salle: string, cours_debut: Date) : Promise<Etudiant[]> {
        return this.presenceService.getAllMissedEtudiantDuringOneCours(id_matiere, id_niveau, id_parcours, id_salle, cours_debut);
    }

    @Post()
    enregistrer(@Body() dto: PresenceDto) {
      return this.presenceService.enregistrer(dto);
    }
}