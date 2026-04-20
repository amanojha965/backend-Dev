import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import createUser from "./exersice/user.js";
import filterUsers from "./exersice/ex1.js";
import responceTime from "./exersice/ex2.js";
let port=8080;
const app=express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(responceTime);

app.post("/users",createUser);
app.get("/users/:name",filterUsers);

app.get("/contact",(req,res)=>{
    res.render("contact");
});
app.post("/contact",(req,res)=>{
    const {name,email,message}=req.body;
    console.log("Contact form submitted:",req.body);
    res.render("success",{name,email,message});
})
app.use((req,res)=>{
    res.status(404).render("404");
    
})

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})
