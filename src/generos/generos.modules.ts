import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { GenerosController } from './generos.controller.js';
import { GenerosService } from './shared/generos.service.js';
import { GeneroSchema } from './schemas/genero.schema.js';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Genero', schema: GeneroSchema }]),
    ],
    controllers: [GenerosController],
    providers: [GenerosService],
    exports: [GenerosService],
})
export class GenerosModule { }
