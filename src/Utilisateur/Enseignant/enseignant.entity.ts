import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Utilisateur } from "../utilisateur.entity";
import { Matiere } from "../../Matiere/matiere.entity";
import { Disponibilite } from "../../Disponibilite/disponibilite.entity";

@Entity()
export class Enseignant{
    @PrimaryGeneratedColumn()
    id_enseignant : number;

    @Column()
    nom: string;

    @Column({unique: true})
    prenom :string;

    @OneToOne(()=>Utilisateur, (utilisateur)=>utilisateur.enseignant)
    utilisateur : Enseignant;

    @OneToMany(()=>Disponibilite, (disponibilite)=>disponibilite.enseignant)
    disponibilite : Disponibilite[];

    @OneToMany(()=>Matiere , (matiere)=>matiere.enseignant)
    matiere : Matiere[];
}