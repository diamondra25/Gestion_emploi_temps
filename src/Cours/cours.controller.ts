import { Controller, Get, Post, Put, Delete, Body } from "@nestjs/common";
import { CoursService } from "./cours.service";
import { Cours, CoursDTO } from "./cours.entity";

@Controller('cours')
export class CoursController{
    constructor(private coursService : CoursService){}

    @Get()
    async getAllCours(): Promise<Cours[]> {
        return this.coursService.getAllCours();
    }

    @Get('AllCoursThisWeek')
    async getAllCoursThisWeek(): Promise<Cours[]> {
        return this.coursService.getAllCoursThisWeek();
    }

    @Get('AllCoursForSpecificWeek')
    async getAllCoursForSpecificWeek(@Body('date') date: Date): Promise<Cours[]> {
        return this.coursService.getCoursForSpecificWeek(date);
    } 

    @Post()
    async createCours(@Body() coursDto: CoursDTO) : Promise<{ cours: Cours; qrCode: string }> {
        return this.coursService.createCours(coursDto);
    }

    @Put()
    async updateCours(@Body() cours: Cours) : Promise<Cours> {
        return this.coursService.update(cours);
    }

    @Delete()
    async deleteCours(@Body() cours: Cours) : Promise<void> {
        return this.coursService.delete(cours);
    }

    

}