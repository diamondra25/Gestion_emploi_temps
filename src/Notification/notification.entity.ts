import { Utilisateur } from "../Utilisateur/utilisateur.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notification{
    @PrimaryGeneratedColumn()
    id_notification : number;

    @ManyToOne(()=> Utilisateur, (utilisateur) => utilisateur.notification, {nullable: true})
    utilisateur: Utilisateur;
    
    
}