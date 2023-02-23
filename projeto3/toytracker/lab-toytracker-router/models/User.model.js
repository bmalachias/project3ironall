import mongoose from "mongoose";

/**
 * name: String, obrigatório
 * email: string, obrigatorio, check valid email
 * bithDate: Date, obrigatório
 */

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
}, { timestamps: true })

export default model('User', userSchema)