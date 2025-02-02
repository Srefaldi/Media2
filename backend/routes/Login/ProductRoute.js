import express from "express";
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProducts,
    delateProducts
} from "../../controller/LOGIN/Products.js"
import { verifyUser } from "../../middleware/Login/AuthUser.js";
const router = express.Router();

router.get('/products', verifyUser, getProducts);
router.get('/products/:id', verifyUser ,getProductsById);
router.post('/products', verifyUser, createProduct);
router.patch('/products/:id', verifyUser ,updateProducts);
router.delete('/products/:id', verifyUser ,delateProducts);
export default router;