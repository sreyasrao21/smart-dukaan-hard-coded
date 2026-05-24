import dns from 'dns';
dns.setServers(['8.8.8.8' , '1.1.1.1']);
import mongoose from "mongoose";

export const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://sreyasrao21_db_user:993hPfu2wKcJtJnt@cluster0.4iazohp.mongodb.net/kirana_db?retryWrites=true&w=majority");
        console.log("MongoDB Connected");
    }
    catch (error){
        console.log("MongoDB connection failed: ", error);
    }
};