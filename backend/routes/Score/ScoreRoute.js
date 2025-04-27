import express from "express";
import {
  getScores,
  getScoresByUserId,
  createScore,
} from "../../controller/LOGIN/SkorController.js";
import { verifyUser, adminOnly } from "../../middleware/Login/AuthUser.js";

const router = express.Router();

router.get("/scores", verifyUser, getScores);
router.get("/scores/:user_id", verifyUser, adminOnly, getScoresByUserId);
router.post("/scores", verifyUser, createScore);

export default router;
