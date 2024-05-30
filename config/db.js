import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://vkaru001:Saujp2205@cluster1.4023l4m.mongodb.net/food_delivery').then(()=>console.log("DB Connected"))
}


