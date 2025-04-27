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
import User from "./models/LOGIN/UserModel.js";
import Score from "./models/MateriSkor/SkorModel.js";
import Evaluation from "./models/EVALUASI/EvaluasiModel.js";
import Question from "./models/EVALUASI/Soal.js";
import SkorRoute from "./routes/Score/ScoreRoute.js";
dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

(async () => {
  try {
    // Sinkronkan tabel tanpa menghapus data (force: false)
    await store.sync({ force: false }); // Sinkronkan Sessions
    console.log("Sessions table synced");

    await Question.sync({ force: false }); // Sinkronkan Questions
    console.log("Questions table synced");

    await Score.sync({ force: false }); // Sinkronkan Scores
    console.log("Scores table synced");

    await Evaluation.sync({ force: false }); // Sinkronkan Evaluations
    console.log("Evaluations table synced");

    await User.sync({ force: false }); // Sinkronkan Users
    console.log("Users table synced");

    // Tidak perlu menonaktifkan foreign key checks karena kita tidak menghapus tabel
    console.log("Database synced successfully");

    // Inisialisasi data evaluasi jika belum ada
    const evaluations = await Evaluation.findAll();
    if (evaluations.length === 0) {
      // Buat evaluasi untuk bab 1-6
      for (let i = 1; i <= 6; i++) {
        await Evaluation.create({
          type: "bab",
          chapter: i,
        });
      }
      // Buat evaluasi akhir
      await Evaluation.create({
        type: "evaluasi_akhir",
      });
      console.log("Evaluations initialized");
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
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://localhost"],
  })
);

app.use(express.json());
app.use(SkorRoute);
app.use(UserRoute);
app.use(AuthRoute);
app.use(ScoreRoute);
app.use(QuestionRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running ...");
});
