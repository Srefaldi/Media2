import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/LOGIN/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/Login/UserRoute.js";
import AuthRoute from "./routes/Login/AuthRoute.js";
import ScoreRoute from "./routes/Score/ScoreRoute.js";
import QuestionRoute from "./routes/Evaluasi/EvaluasiRoute.js";
import KkmRoute from "./routes/KKM/kkmRoute.js";
import User from "./models/LOGIN/UserModel.js";
import Score from "./models/MateriSkor/SkorModel.js";
import Evaluation from "./models/EVALUASI/EvaluasiModel.js";
import Question from "./models/EVALUASI/Soal.js";
import Kkm from "./models/KKM/kkmModels.js";

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

(async () => {
  try {
    await store.sync({ force: false });
    console.log("Sessions table synced");

    await Kkm.sync({ force: false });
    console.log("KKM table synced");

    await Question.sync({ force: false });
    console.log("Questions table synced");

    await Score.sync({ force: false });
    console.log("Scores table synced");

    await Evaluation.sync({ force: false });
    console.log("Evaluations table synced");

    await User.sync({ force: false });
    console.log("Users table synced");

    console.log("Database synced successfully");

    const evaluations = await Evaluation.findAll();
    if (evaluations.length === 0) {
      for (let i = 1; i <= 6; i++) {
        await Evaluation.create({
          type: "bab",
          chapter: i,
        });
      }
      await Evaluation.create({
        type: "evaluasi_akhir",
      });
      console.log("Evaluations initialized");
    }

    // Inisialisasi KKM default jika belum ada
    const kkmRecords = await Kkm.findAll();
    if (kkmRecords.length === 0) {
      const evaluations = await Evaluation.findAll();
      for (const evaluation of evaluations) {
        await Kkm.create({
          evaluation_id: evaluation.id,
          kkm: 75, // Nilai KKM default
        });
      }
      console.log("KKM initialized with default value 75");
    }
  } catch (error) {
    console.error("Error syncing database:", error);
  }
})();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: false, // Set ke false untuk pengembangan lokal (HTTP)
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(ScoreRoute);
app.use(QuestionRoute);
app.use(KkmRoute);

// Logging untuk debugging sesi
app.use((req, res, next) => {
  console.log("Session ID:", req.sessionID, "User ID:", req.session.userId);
  next();
});

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running ...");
});
