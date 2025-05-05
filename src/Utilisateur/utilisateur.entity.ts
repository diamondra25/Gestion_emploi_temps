import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Enseignant } from "./Enseignant/enseignant.entity";
import { Etudiant } from "./Etudiant/etudiant.entity";

@Entity()
export class Utilisateur{
    @PrimaryGeneratedColumn()
    id_utilisateur: number;

    @Column({unique:true})
    email :string;

    @Column()
    mot_passe : string;

    @Column()
    role: Role;

    @Column({default: false})
    approuve: boolean

    @OneToOne(()=>Enseignant, (enseignant)=>enseignant.utilisateur)
    @JoinColumn()
    enseignant? : Enseignant;

    @OneToOne(()=>Etudiant, (etudiant)=>etudiant.utilisateur)
    @JoinColumn()
    etudiant? : Etudiant;
}

 enum Role {
    ETUDIANT = 'etudiant',
    ENSEIGNANT = 'enseignant',
    ADMIN = 'admin'
}