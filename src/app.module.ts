import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { MentionModule } from './Mention/mention.module';
import { NiveauModule } from './Niveau/niveau.module';
import { MatiereModule } from './Matiere/matiere.module';
import { UtilisateurModule } from './Utilisateur/utilisateur.module';
import { EnseignantModeule } from './Utilisateur/Enseignant/enseignant.module';
import { EtudiantModule } from './Utilisateur/Etudiant/etudiant.module';
import { ClasseModule } from './Classe/classe.module';
import { ParcoursModule } from './Parcours/parcours.module';
import { CoursModule } from './Cours/cours.module';
import { SalleModule } from './Salle/salle.module';
import { DisponibiliteModule } from './Disponibilite/disponibilite.module';
import { Utilisateur } from './Utilisateur/utilisateur.entity';
import { Etudiant } from './Utilisateur/Etudiant/etudiant.entity';
import { Enseignant } from './Utilisateur/Enseignant/enseignant.entity';
import { Salle } from './Salle/salle.entity';
import { Mention } from './Mention/mention.entity';
import { Parcours } from './Parcours/parcours.entity';
import { Classe } from './Classe/classe.entity';
import { Disponibilite } from './Disponibilite/disponibilite.entity';
import { Matiere } from './Matiere/matiere.entity';
import { Niveau } from './Niveau/niveau.entity';
import { Cours } from './Cours/cours.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'postgres',
      host : 'localhost',
      port : 5432,
      username :'postgres',
      password :'PostgreSQLPwd13',
      database : 'gestion_emploi_temps',
      entities : [Utilisateur, Etudiant, Enseignant,
                  Disponibilite, Matiere, Mention, 
                  Parcours, Niveau, Classe, Salle, Cours] ,
      synchronize: false,
      migrations: ['src/Migrations/*.ts'],

    }),
    AuthModule,
    MentionModule,
    ParcoursModule,
    NiveauModule,
    MatiereModule,
    UtilisateurModule,
    EnseignantModeule,
    EtudiantModule,
    ClasseModule,
    CoursModule,
    SalleModule,
    DisponibiliteModule
  ]
})
export class AppModule {}