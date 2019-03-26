import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
