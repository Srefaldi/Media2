import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/LOGIN/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/Login/UserRoute.js";
import AuthRoute from "./routes/Login/AuthRoute.js";
import ScoreRoute from "./routes/Score/ScoreRoute.js";
import User from "./models/LOGIN/UserModel.js";
import Score from "./models/MateriSkor/SkorModel.js";
import SkorRoute from "./routes/Score/ScoreRoute.js"; // Pastikan impor ini ada
dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

(async () => {
  try {
    await store.sync({ force: true }); // Sinkronkan Sessions dulu
    await User.sync({ force: true }); // Buat ulang users
    await Score.sync({ force: true }); // Buat ulang scores
    console.log("Database synced successfully");
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
// Mount rute
app.use(SkorRoute); // Pastikan ini ada
app.use(express.json());
app.use(UserRoute);
app.use(AuthRoute);
app.use(ScoreRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running ...");
});
