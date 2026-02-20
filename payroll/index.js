import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/user.routes.js";

dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;


app.use(router);


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
}   )   

app.get("/", (req, res)=>{
    res.send(`server is running on port ${port}`)
})  