import dns from 'dns';
dns.setServers(['8.8.8.8' , '1.1.1.1']);
import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect("MONGO_URI");
        console.log("MongoDB Connected");
    }
    catch (error){
        console.log("MongoDB connection failed: ", error);
    }
};
