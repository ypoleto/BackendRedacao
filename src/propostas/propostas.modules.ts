import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PropostasController } from './propostas.controller.js';
import { PropostasService } from './shared/propostas.service.js';
import { PropostaSchema } from './schemas/proposta.schema.js';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Proposta', schema: PropostaSchema }]),
    ],
    controllers: [PropostasController],
    providers: [PropostasService],
    exports: [PropostasService],
})
export class PropostasModule { }
