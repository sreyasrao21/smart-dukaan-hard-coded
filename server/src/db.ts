import dns from 'dns';
dns.setServers(['8.8.8.8' , '1.1.1.1']);
import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error("MONGO_URI is missing. Add it to server/.env before starting the server.");
        }

        await mongoose.connect(mongoUri);
        console.log("MongoDB Connected");
    }
    catch (error){
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};
