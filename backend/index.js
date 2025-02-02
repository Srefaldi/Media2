import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
// import db from "./config/LOGIN/Database.js";
import UserRoute from "./routes/Login/UserRoute.js";
import ProductRoute from "./routes/Login/ProductRoute.js";
import AuthRoute from "./routes/Login/AuthRoute.js";



dotenv.config();
const app = express();

// (async()=>{
//     await db.sync();
// })();

app.use(session({
    secret: process.env.SESS_SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        secure: 'auto'
    }
}))


app.use(cors({
    credentials: true,
    origin : 'http://localhost:3000'
}))

app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
app.use(AuthRoute);



app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running ...')
});