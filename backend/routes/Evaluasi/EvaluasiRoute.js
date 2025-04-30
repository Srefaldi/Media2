import express from "express";
import {
  createEvaluation,
  createQuestion,
  getQuestionsByEvaluation,
  updateQuestion,
  deleteQuestion,
  getEvaluations,
} from "../../controller/Evaluasi/EvaluasiController.js";
import { verifyUser, adminOnly } from "../../middleware/Login/AuthUser.js";

const router = express.Router();

router.post("/evaluations", verifyUser, adminOnly, createEvaluation);
router.post("/questions", verifyUser, adminOnly, createQuestion);
router.get(
  "/questions/evaluation/:evaluation_id",
  verifyUser,
  adminOnly,
  getQuestionsByEvaluation
);
router.patch("/questions/:id", verifyUser, adminOnly, updateQuestion);
router.delete("/questions/:id", verifyUser, adminOnly, deleteQuestion);
router.get("/evaluations", verifyUser, adminOnly, getEvaluations);

export default router;
