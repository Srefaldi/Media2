import express from "express";
import { getKkm, setKkm } from "../../controller/KKM/KkmController.js";
import { verifyUser, adminOnly } from "../../middleware/Login/AuthUser.js";

const router = express.Router();

router.get("/kkm", verifyUser, adminOnly, getKkm);
router.post("/kkm", verifyUser, adminOnly, setKkm);

export default router;
