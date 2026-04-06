import express from "express";
import {
    createBook,
    createMember,
    borrowBooks,
    getSummary
} from "../controllers/library.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/book", authMiddleware, createBook);
router.post("/member", authMiddleware, createMember);
router.post("/borrow", authMiddleware, borrowBooks);
router.get("/summary/:id", authMiddleware, getSummary);

export default router;