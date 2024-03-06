import { Injectable } from '@nestjs/common';
import { User } from './user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel('User')
    private userModel: Model<User>
  ) { }

  async getAll() {
    return await this.userModel.find().exec();
  }

  async getById(id: string) {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      // Yes, it's a valid ObjectId, proceed with `findById` call.
      return await this.userModel.findById(id).exec();
    }
    return null
  }

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async update(id: string, user: User) {
    await this.userModel.updateOne({ _id: id }, user).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.userModel.deleteOne({ _id: id }).exec();
  }

}
