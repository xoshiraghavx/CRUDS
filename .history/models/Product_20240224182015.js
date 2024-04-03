import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type: String, re},
    description: String,
    price:{type: Number, required: true}
})