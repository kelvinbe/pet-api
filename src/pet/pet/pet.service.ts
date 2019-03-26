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

        async create(data: PetDTO){
            const pet = await this.petRepository.create(data);
            await this.petRepository.save(pet);
            return pet;
        }

        async read(id: string){
            return await this.petRepository.findOne({where: { id }});
        }

        async update(id: string, data: Partial<PetDTO>){
            await this.petRepository.update({ id }, data);
            return await this.petRepository.findOne({ id });
        }

        async destroy(id: string){
            await this.petRepository.delete({id});
            return { deleted: true };
        }



}
