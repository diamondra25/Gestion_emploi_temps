import { Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { ClasseService } from "./classe.service";
import { Classe } from "./classe.entity";

@Controller('classe')
export class ClasseController{
    constructor(private classeService : ClasseService){}

    @Get()
    async findAllClasse():Promise<Classe[]>{
        return this.classeService.getAllClasse();
    }

    @Post()
    async createClasse(classe: Classe): Promise<Classe> {
        return this.classeService.createClasse(classe);
    }

    @Put(':id_parcours/:id_niveau')
    async updateClasse(id_parcours: number, id_niveau: string, classe: Classe): Promise<Classe> {
        return this.classeService.update(id_parcours, id_niveau, classe);
    }

    @Delete(':id_parcours/:id_niveau')
    async deleteClasse(id_parcours: number, id_niveau: string): Promise<void> {
        return this.classeService.delete(id_parcours, id_niveau);
    }
}