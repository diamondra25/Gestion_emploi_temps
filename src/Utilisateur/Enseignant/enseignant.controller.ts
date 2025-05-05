import { Controller, Delete, Get , Post, Put} from "@nestjs/common";
import { EnseignantService } from "./enseignant.service";
import { Enseignant } from "./enseignant.entity";

@Controller('enseignant')
export class EnseignantController{
    constructor(private enseignantService : EnseignantService) {}

    @Get()
    async getAllEnseignant() {
        return this.enseignantService.findAll();
    }

    @Post()
    async createEnseignant(enseignant : Enseignant)
    {
        return this.enseignantService.create(enseignant);
    }

    @Put(':id')
    async updateEnseignant(id : number, enseignant : Enseignant) {
        return this.enseignantService.update(id, enseignant);
    }

    @Delete(':id')
    async deleteEnseignant(id : number) {
        return this.enseignantService.remove(id);
    }    
}