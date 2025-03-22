import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:Number, required:true},
    type:{type:String, required:true}, // for personal or business
    createdAt:{type:Date, default:Date.now},
    user:{type:mongoose.Schema.Types.ObjectId},
})

export const Contact = mongoose.model("Contact",contactSchema);