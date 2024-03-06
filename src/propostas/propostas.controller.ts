import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PropostasService } from './shared/propostas.service';
import { Proposta } from './shared/proposta';

@Controller('propostas')
export class PropostasController {
  constructor(private readonly propostasService: PropostasService) { }

  @Get()
  async getAll(): Promise<Proposta[]> {
    return this.propostasService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Proposta> {
    return this.propostasService.getById(id);
  }
  @Post()
  async create(@Body() proposta: Proposta): Promise<Proposta> {
    return this.propostasService.create(proposta);
  }
  @Put()
  async update(@Param('id') id: string, @Body() proposta: Proposta): Promise<Proposta> {
    return this.propostasService.update(id, proposta);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.propostasService.delete(id);
  }
}
