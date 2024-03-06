import { Document } from "mongoose";

export class Proposta extends Document {
    tema: string
    genero: string
    min: number
    max: number
    aplicacao: Date
    entrega: Date
    dificuldade: number
    professor: number
}