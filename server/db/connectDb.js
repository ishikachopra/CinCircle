import mongoose from "mongoose";
import dotenv from 'dotenv'

const user1 = "samridhitiwari23";
const dbName = "CinCirle";
const uri = `mongodb+srv://${user1}:samisham@cluster0.b9usu.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connect to MongoDb: ", error.message);
        process.exit(1);
    }
};
