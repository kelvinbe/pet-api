import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';


@Module({
  imports: [TypeOrmModule.forRoot(), PetModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
  },

],
   
})
export class AppModule {}
