import { Injectable } from '@nestjs/common';
import { Proposta } from './proposta';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PropostasService {

  constructor(
    @InjectModel('Proposta')
    private propostaModel: Model<Proposta>
  ) { }

  async getAll() {
    return await this.propostaModel.find().exec();
  }

  async getById(id: string) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      return await this.propostaModel.findById(id).exec();
    }
    return null
  }

  async create(proposta: Proposta) {
    const createdProposta = new this.propostaModel(proposta);
    return await createdProposta.save();
  }

  async update(id: string, proposta: Proposta) {
    await this.propostaModel.updateOne({ _id: id }, proposta).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.propostaModel.deleteOne({ _id: id }).exec();
  }

}
