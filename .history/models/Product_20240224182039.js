import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type: String, require: true},
    description: String,
    price:{type: Number, required: true}
})