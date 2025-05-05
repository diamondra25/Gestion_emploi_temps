import { Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { SalleService } from "./salle.service";
import { Salle } from "./salle.entity";

@Controller('salle')
export class SalleController{
    constructor(private salleService : SalleService){}

    @Get()
    async findAllSalle():Promise<Salle[]>{
        return this.salleService.getAllSalle();
    }

    @Post()
    async createSalle(salle: Salle): Promise<Salle> {
        return this.salleService.createSalle(salle);
    }

    @Put(':id_salle')
    async updateSalle(id_salle: string, salle: Salle): Promise<Salle> {
        return this.salleService.update(id_salle, salle);
    }

    @Delete(':id_salle')
    async deleteSalle(id_salle: string): Promise<void> {
        return this.salleService.delete(id_salle);
    }



}