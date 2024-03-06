import * as mongoose from 'mongoose';
const { Schema } = mongoose;

export const GeneroSchema = new Schema({
    value: String,
})