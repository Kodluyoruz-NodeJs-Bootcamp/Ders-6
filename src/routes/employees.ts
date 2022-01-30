import * as express from 'express';
import { Router } from 'express';
import {
    createEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById
} from '../controllers/employees';
import * as passport from 'passport';

const auth = passport.authenticate('jwt-authentication', { session: false });

const router: Router = express.Router();

router.get('/', getAllEmployees);
router.post('/', createEmployee);

router.get('/:id', getEmployeeById);
router.put('/:id', updateEmployeeById);
router.delete('/:id', auth, deleteEmployeeById);

export default router;
