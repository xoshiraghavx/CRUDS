import { Schema } from "mongoose";

const ModelSchema = new Schema({
    title: {type:},
    description: String,
    price:{type: Number, required: true}
})