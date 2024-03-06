import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const UsersSchema = new Schema({
    nome: String,
    email: String,
    senha: String,
    perfil: String,
})