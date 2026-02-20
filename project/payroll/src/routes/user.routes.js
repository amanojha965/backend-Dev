import express from "express";
import { userUpdateService } from "../service/user.update.js";
import {userlogging} from "../middleware/mid.js"; 
import userloggingservice from "../service/user.logging.js";
import { userSignupMid } from "../middleware/mid.js";
import usersignup from "../service/signup.js";

const router = express.Router();

// Update User
router.put("/update/:id", userUpdateService);
router.post("/login", userlogging, userloggingservice);
router.post("/signup", userSignupMid, usersignup);

export default router;
