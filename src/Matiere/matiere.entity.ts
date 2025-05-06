import { Classe } from "../Classe/classe.entity";
import { Enseignant } from "../Utilisateur/Enseignant/enseignant.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matiere{
    @PrimaryGeneratedColumn()
    id_matiere : number;

    @Column()
    nom_matiere : string;

    @ManyToOne(()=>Enseignant, (enseignant)=> enseignant.matiere)
    @JoinColumn()
    enseignant : Enseignant;

    @OneToMany(()=>Classe, (classe)=>classe.matiere)
    classe :Classe[]
}