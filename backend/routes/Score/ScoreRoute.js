import express from "express";
import {
  getScores,
  getScoresByUserId,
  createScore,
} from "../../controller/LOGIN/SkorController.js";
import { verifyUser, adminOnly } from "../../middleware/Login/AuthUser.js";

const router = express.Router();

// Endpoint untuk mendapatkan skor pengguna yang login (semua user terautentikasi)
router.get("/scores", verifyUser, getScores);
// Endpoint untuk mendapatkan skor berdasarkan user_id (hanya admin)
router.get("/scores/:user_id", verifyUser, adminOnly, getScoresByUserId);
// Endpoint untuk membuat skor (semua user terautentikasi)
router.post("/scores", verifyUser, createScore);

export default router;
