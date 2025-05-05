import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryColumnCannotBeNullableError } from "typeorm";
import { Utilisateur } from "../utilisateur.entity";
import { Classe } from "../../Classe/classe.entity";

@Entity()
export class Etudiant{
    @PrimaryColumn()
    matricule : string

    @Column()
    nom: string;

    @Column({unique: true})
    prenom :string;

    @Column ()
    titre : Titre

    @OneToOne(()=>Utilisateur, (utilisateur)=>utilisateur.etudiant)
    utilisateur: Utilisateur

    @ManyToOne(()=>Classe, (classe)=>classe.etudiant)
    classe :Classe;

}

enum Titre{
    Simple = 1 ,
    Délegué = 2 
}