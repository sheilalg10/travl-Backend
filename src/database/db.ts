import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travl';

export const connectDB = async () => {
    try{
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    }catch (error) {
        console.log('MongoDB connection error: ', error);
        process.exit(1);
    }
}
