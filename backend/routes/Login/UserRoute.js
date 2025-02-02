import express from "express";
import {
    getUsers,
    getUsersById,
    createUsers,
    updateUsers,
    delateUsers
} from "../../controller/LOGIN/Users.js"
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:id', updateUsers);
router.delete('/users/:id', delateUsers);
export default router;