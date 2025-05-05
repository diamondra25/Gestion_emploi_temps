import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { ParcoursService } from "./parcours.service";
import { Parcours } from "./parcours.entity";

@Controller('parcours')
export class ParcoursController{
    constructor(private parcoursService : ParcoursService){}

    @Get()
    async getAllParcours(): Promise<Parcours[]> {
        return this.parcoursService.getAllParcours();
    }

    @Post()
    async createParcours(@Body() parcours: Parcours): Promise<Parcours> {
        return this.parcoursService.createParcours(parcours);
    }

    @Put(':id')
    async updateParcours(@Body() parcours: Parcours): Promise<Parcours> {
        return this.parcoursService.update(parcours.id_parcours, parcours);
    }

    @Delete(':id')
    async deleteParcours(@Body() id: number): Promise<void> {
        return this.parcoursService.delete(id);
    }

    
}