import express from "express";
import {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    delateUsers
} from "../../controller/LOGIN/Users.js"
import { verifyUser, adminOnly } from "../../middleware/Login/AuthUser.js";

const router = express.Router();

router.get('/users', verifyUser ,adminOnly,getUsers);
router.get('/users/:id', verifyUser ,adminOnly,getUsersById);
router.post('/users', verifyUser ,adminOnly,createUsers);
router.patch('/users/:id', verifyUser ,adminOnly,updateUsers);
router.delete('/users/:id', verifyUser ,adminOnly,delateUsers);
export default router;