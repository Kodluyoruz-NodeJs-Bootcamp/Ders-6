import * as express from 'express';
import { Router } from 'express';
import {
    createCategory,
    getAllCategories,
    // getEmployeeById,
    // updateEmployeeById,
    // deleteEmployeeById
    getAllCategoriesWithProducts
} from '../controllers/categories';
import * as passport from 'passport';

const auth = passport.authenticate('jwt-authentication', { session: false });

const router: Router = express.Router();

router.get('/', getAllCategories);
router.post('/', createCategory);
router.get('/products', getAllCategoriesWithProducts);

// router.get('/:id', getEmployeeById);
// router.put('/:id', updateEmployeeById);
// router.delete('/:id', auth, deleteEmployeeById);

export default router;
