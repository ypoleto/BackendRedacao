import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.modules';
import { PropostasModule } from './propostas/propostas.modules';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@projeto.hufetlu.mongodb.net/?retryWrites=true&w=majority&appName=projeto'),
    UsersModule,
    PropostasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
