import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MentionService } from "./mention.service";
import { Mention } from "./mention.entity";

@Controller('mention')
export class MentionController{
    constructor (private mentionService : MentionService) {}

    @Get()
    async getAllMention(): Promise<Mention[]> {
        return this.mentionService.getAllMention();
    }

    @Get('getAllParcoursforMention/:id_mention')
    async getAllParcoursforMention(@Param('id_mention') id_mention: number): Promise<Mention[]> {
        return this.mentionService.getAllParcoursforMention(id_mention);
    }

    @Post()
    async createMention(@Body() mention: Mention): Promise<Mention> {
        return this.mentionService.createMention(mention);
    }

    @Put(':id')
    async updateMention(@Body() mention: Mention): Promise<Mention> {
        return this.mentionService.update(mention.id_mention, mention);
    }

    @Delete(':id')
    async deleteMention(@Param('id') id: number ): Promise<void> {
        return this.mentionService.delete(id);
    }
    
}