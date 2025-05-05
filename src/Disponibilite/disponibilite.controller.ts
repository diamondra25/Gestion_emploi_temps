import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { DisponibiliteService } from "./disponibilite.service";
import { Disponibilite } from "./disponibilite.entity";

@Controller('disponibilite')
export class DisponibiliteController{
    constructor(private disponibiliteService : DisponibiliteService){}

    @Get('this-week/:id_enseignant')
    async getDisponibilityThisWeek(id_enseignant: number) {
        return this.disponibiliteService.findDisponibilityThisWeek(id_enseignant);
    }

    @Get('specific-week/:id_enseignant/:date')
    async getDisponibilityforSpecificWeek(id_enseignant: number, date: Date) {
        return this.disponibiliteService.findDisponibilityforSpecificWeek(id_enseignant, date);
    }

    @Post('create')
    async createDisponibility( @Body() disponibilite: Disponibilite) {
        return this.disponibiliteService.create(disponibilite);
    }

    @Put('update/:id')
    async updateDisponibility(id: number, disponibilite: Disponibilite) {
        return this.disponibiliteService.update(id, disponibilite);
    }

    @Delete('delete/:id')
    async deleteDisponibility(id: number) {
        return this.disponibiliteService.delete(id);
    }

    
}