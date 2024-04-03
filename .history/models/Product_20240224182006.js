import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {},
    description: String,
    price:{type: Number, required: true}
})