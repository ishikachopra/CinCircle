import express from "express"
import dotenv from 'dotenv'
import { connectDb } from "./db/connectDb.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())// allows us to parse incoming request with json payloads
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use(express.urlencoded({ extended: true }));




app.listen(PORT, () => {
    connectDb();
    console.log("Server is running on port: ", PORT);
})

// samisham;

