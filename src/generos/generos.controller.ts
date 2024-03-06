import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GenerosService } from './shared/generos.service';
import { Genero } from './shared/genero';

@Controller('generos')
export class GenerosController {
  constructor(private readonly generosService: GenerosService) { }

  @Get()
  async getAll(): Promise<Genero[]> {
    return this.generosService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Genero> {
    return this.generosService.getById(id);
  }
  @Post()
  async create(@Body() genero: Genero): Promise<Genero> {
    return this.generosService.create(genero);
  }
  @Put()
  async update(@Param('id') id: string, @Body() genero: Genero): Promise<Genero> {
    return this.generosService.update(id, genero);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    this.generosService.delete(id);
  }
}
