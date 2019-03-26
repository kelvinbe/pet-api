import { Injectable } from '@nestjs/common';
import { PetEntity } from '../pet.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PetDTO } from '../pet.dto';



@Injectable()
export class PetService {
    constructor(
        @InjectRepository(PetEntity)
        private petRepository: Repository<PetEntity>,){}

        async showAll(){
            return await this.petRepository.find();
        }


}
