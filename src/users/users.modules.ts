import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller.js';
import { UsersService } from './shared/users.service.js';
import { UsersSchema } from './schemas/user.schema.js';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }]),
    ],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule { }
