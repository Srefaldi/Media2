import express from "express";
import { Login, logOut, Me } from "../../controller/LOGIN/Auth.js";
const router = express.Router();

router.get("/me", Me);
router.post("/login", Login); // Tidak ada perubahan di sini
router.delete("/logout", logOut);
export default router;
