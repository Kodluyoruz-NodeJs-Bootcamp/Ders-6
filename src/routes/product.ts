import * as express from 'express';
import { Router } from 'express';
import {
    createProducts,
    getAllProducts,
    // getEmployeeById,
    // updateEmployeeById,
    // deleteEmployeeById
    filterProducts,
    getProductsByCategoryId,
    getProductById,
    getProductsWithQueryBuilder,
    updateProduct,
    deleteProduct,
    getOldProducts
} from '../controllers/products';
import * as passport from 'passport';

const auth = passport.authenticate('jwt-authentication', { session: false });

const router: Router = express.Router();

router.get('/', getAllProducts);
router.post('/', createProducts);
router.get('/filter', filterProducts)
router.get('/categories', getProductsByCategoryId)
router.get('/:id', getProductById)
router.get('/builder/:id', getProductsWithQueryBuilder)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/old/product', getOldProducts);

export default router;
