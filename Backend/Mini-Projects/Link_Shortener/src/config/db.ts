import mongoose from 'mongoose';
import { env } from './env.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '1.1.1.1']);
console.log('DNS servers set to Google DNS and Cloudflare DNS');

export const connectDB = async ()=>{
    try{
        await mongoose.connect(env.MONGODB_URI);
        console.log('MongoDB connected');

    }catch(err){
        console.error('Error connecting to MongoDB:', err);
        console.error(err);

        process.exit(1); 
    }
}