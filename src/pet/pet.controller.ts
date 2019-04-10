import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, Logger } from '@nestjs/common';
import { PetService } from './pet/pet.service';
import { PetDTO } from './pet.dto';
import { identity } from 'rxjs';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('api/pet')
export class PetController {
    private logger = new Logger('PetController');
    constructor(private petService: PetService){}
    @Get()
    showAllPets(){
        return this.petService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe)
    createPet(@Body()data: PetDTO){
        this.logger.log(JSON.stringify(data));
        return this.petService.create(data);
    }

    @Get(':id')
    readPet(@Param('id') id: string){
        return this.petService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe)
    updatePet(@Param('id') id: string, @Body() data: Partial<PetDTO>){
        this.logger.log(JSON.stringify(data));
        return this.petService.update(id, data);
    }

    @Delete(':id')
    destroyPet(@Param('id') id: string){
        return this.petService.destroy(id);
    }

    
}
