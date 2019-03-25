import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';


@Entity('pet')
export class PetEntity {
    @PrimaryGeneratedColumn('uuid') id: string;

    @CreateDateColumn() created: Date;

    @Column('text') name: string;

    @Column('text') category: string;

    
}