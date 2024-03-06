import { Injectable } from '@nestjs/common';
import { Genero } from './genero';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class GenerosService {

  constructor(
    @InjectModel('Genero')
    private generoModel: Model<Genero>
  ) { }

  async getAll() {
    return await this.generoModel.find().exec();
  }

  async getById(id: string) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      return await this.generoModel.findById(id).exec();
    }
    return null
  }

  async create(genero: Genero) {
    const createdGenero = new this.generoModel(genero);
    return await createdGenero.save();
  }

  async update(id: string, genero: Genero) {
    await this.generoModel.updateOne({ _id: id }, genero).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.generoModel.deleteOne({ _id: id }).exec();
  }

}
