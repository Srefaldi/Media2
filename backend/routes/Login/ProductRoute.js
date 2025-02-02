import express from "express";
import {
    getProducts,
    getProductsById,
    createProduct,
    updateProducts,
    delateProducts
} from "../../controller/LOGIN/Products.js"
const router = express.Router();

router.get('/products', getProducts);
router.get('/products/:id', getProducts);
router.post('/products', createProduct);
router.patch('/products/:id', updateProducts);
router.delete('/products/:id', delateProducts);
export default router;