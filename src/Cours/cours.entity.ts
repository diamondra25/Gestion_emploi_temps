import { Classe } from "../Classe/classe.entity";
import { Salle } from "../Salle/salle.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cours{
    @PrimaryColumn()
    id_parcours: number;

    @PrimaryColumn()
    id_niveau: string;

    @PrimaryColumn()
    id_matiere : number;

    @PrimaryColumn()
    id_salle: string;

    @PrimaryColumn({type:'timestamp'})
    cours_debut : Date;

    @Column({type:'timestamp'})
    cours_fin : Date;

    @Column({default:0})
    status :Status;

    @Column({ unique: true })
    qrCodeToken: string;

    @ManyToOne(()=>Classe, (classe)=> classe.cours)
    classe :Classe;

    @ManyToOne(()=>Salle, (salle)=> salle.cours)
    salle :Salle;

}

export class CoursDTO{
    id_parcours: number;
    id_niveau: string;
    id_matiere : number;
    id_salle: string;
    cours_debut : Date;
    cours_fin : Date;
    status :Status;
    qrCodeToken: string;
}

enum Status {
    PLANIFIER=0,
    EN_COURS =1,
    TERMINE =2,
    ANNULE =3, 
}