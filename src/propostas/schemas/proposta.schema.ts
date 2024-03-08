import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const PropostaSchema = new Schema({
    tema: String,
    genero: String,
    min: Number,
    max: Number,
    aplicacao: Date,
    entrega: Date,
    dificuldade: Number,
    professor: Number,
    turma: Number,
})