import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import libraryRoutes from "./routes/library.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", libraryRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server running...");
});