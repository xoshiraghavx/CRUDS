import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type: String, requir: true},
    description: String,
    price:{type: Number, required: true}
})