import { Classe } from "../Classe/classe.entity";
import { Matiere } from "../Matiere/matiere.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Matiere_Classe {
  @PrimaryGeneratedColumn()
  id_mc: number;

  @ManyToOne(() => Matiere, (matiere) => matiere.matiere_classes )
  matiere: Matiere;

  @ManyToOne(() => Classe, (classe) => classe.matiere_classes )
  classe: Classe;

}