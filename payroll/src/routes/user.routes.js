import express from "express";
import { userUpdateService } from "../service/user.update.js";
import userloggingservice from "../service/user.logging.js";
import usersignup from "../service/signup.js";

const router = express.Router();

// Update User
router.put("/update/:id", userUpdateService);
router.post("/login", userloggingservice);
router.post("/signup", usersignup);

export default router;
