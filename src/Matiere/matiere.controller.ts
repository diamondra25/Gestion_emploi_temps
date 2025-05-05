import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { MatiereService } from "./matiere.service";
import { Matiere } from "./matiere.entity";

@Controller('matiere')
export class MatiereController{
    constructor(private matiereService :MatiereService){}

    @Get('all')
    async getAllMatiere(){
        return this.matiereService.getAllMatiere();
    }

    @Get('enseignantmatiere/:id_enseignant')
    async getMatiereforEnseignant(id_enseignant: number) {
        return this.matiereService.getMatiereforEnseignant(id_enseignant);
    }

    @Post('create')
    async createMatiere(@Body() matiere: Matiere) {
        return this.matiereService.createMatiere(matiere);
    }

    @Delete(':id')
    async deleteMatiere(id: number) {
        return this.matiereService.delete(id);
    }
}