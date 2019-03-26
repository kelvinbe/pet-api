import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PetService } from './pet/pet.service';
import { PetDTO } from './pet.dto';
import { identity } from 'rxjs';

@Controller('pet')
export class PetController {
    constructor(private petService: PetService){}
    @Get()
    showAllPets(){
        return this.petService.showAll();
    }

    @Post()
    createPet(@Body()data: PetDTO){
        return this.petService.create(data);
    }

    @Get(':id')
    readPet(@Param('id') id: string){
        return this.petService.read(id);
    }

    @Put(':id')
    updatePet(@Param('id') id: string, @Body() data: Partial<PetDTO>){
        return this.petService.update(id, data);
    }

    @Delete(':id')
    destroyPet(@Param('id') id: string){
        return this.petService.destroy(id);
    }

    
}
