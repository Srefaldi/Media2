// routes/materiRoute.js
import express from "express";
import { verifyUser, userOnly } from "../../middleware/Login/userOnly.js";

const router = express.Router();

// Contoh controller untuk halaman materi
const getMateri = (req, res) => {
  res.status(200).json({ msg: "Akses ke halaman materi berhasil" });
};

router.get("/materi", verifyUser, userOnly, getMateri);

export default router;
