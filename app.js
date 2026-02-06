import express from "express";
import createUser  from "./movie/createUser.js";  
import login from "./movie/loginUser.js";
import updateUser from "./movie/updateUser.js";
import deleteUser from "./movie/deleteUser.js";

const app = express();
const port = 8000;

app.use(express.json());
app.post("/user", createUser);

app.put("/user/:id", updateUser);
app.post("/login", login);
app.delete("/user/:id",deleteUser);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send(`Server is running on port : ${port}`);
});