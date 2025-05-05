import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { NiveauService } from "./niveau.service";
import { Niveau } from "./niveau.entity";

@Controller('niveau')
export class NiveauController {
    constructor (private niveauService : NiveauService){}

    @Get()
    async getAllNiveau(): Promise<Niveau[]>{
        return this.niveauService.getAllNiveau();
    }

    @Post()
    async createNiveau(@Body() niveau: Niveau): Promise<Niveau> {
        return this.niveauService.createNiveau(niveau);
    }

    @Put(':id')
    async updateNiveau(@Body() niveau: Niveau): Promise<Niveau> {
        return this.niveauService.update(niveau.id_niveau, niveau);
    }

    @Delete(':id')
    async deleteNiveau(@Body() id: string): Promise<void> {
        return this.niveauService.delete(id);
    }


}