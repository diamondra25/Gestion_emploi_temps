import { Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { EtudiantService } from "./etudiant.service";
import { Etudiant } from "./etudiant.entity";

@Controller('etudiant')
export class EtudiantController{
    constructor(private etudiantService : EtudiantService){}

    @Get()
    async getAllEtudiant() {
        return this.etudiantService.findAll();
    }

    @Post()
    async createEtudiant(etudiant : Etudiant){
        return this.etudiantService.create(etudiant);
    }    

    @Put(':id')
    async updateEtudiant(id : string, etudiant : Etudiant) {
        return this.etudiantService.update(id, etudiant);
    }

    @Delete(':id')
    async deleteEtudiant(id : string) {
        return this.etudiantService.remove(id);
    }
}