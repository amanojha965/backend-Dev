import dotenv from "dotenv";
import express from "express";
import userloggingservice from "./src/service/user.logging.js";
import usersignup from "./src/service/signup.js";
import router from "./src/routes/user.routes.js";
dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 8000;
app.use(router);
app.post("/signup", usersignup)
app.post("/login", userloggingservice)

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
}   )   

app.get("/", (req, res)=>{
    res.send(`server is running on port ${port}`)
})  