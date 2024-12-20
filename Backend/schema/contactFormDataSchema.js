import mongoose from "mongoose";

const contactFormDataSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
    },
    service:{
        type:String,
    },
    budget:{
        type:String,
    }
})

export const FormData = new mongoose.model('FormData', contactFormDataSchema)