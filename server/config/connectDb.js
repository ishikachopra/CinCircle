import mongoose from "mongoose";
import dotenv from 'dotenv'

// const user1 = "samridhitiwari23";
// const dbName = "CinCirle";
// const uri = `mongodb+srv://${user1}:samisham@cluster0.b9usu.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const user1 = "amber";
const dbName = "CineCirle";
const uri = `mongodb+srv://${user1}:amberdhama@notcluster.1hqnl07.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=notCluster`;

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connect to MongoDb: ", error.message);
        process.exit(1);
    }
};
