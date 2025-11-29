import express from 'express';
const router = express.Router();
import { 
    getAllusersController, 
    createUserController, 
    getUserByIdController, 
    updateTerminalController, 
    getUserByNameController,
    deleteUserController,
} from '../controllers/userController.js';

router.get('/users', getAllusersController);
router.get('/users/by-name/:name', getUserByNameController);
router.get('/users/:id', getUserByIdController);

router.post('/users', createUserController);
router.patch('/users/:id', updateTerminalController);
router.delete('/users/:id', deleteUserController);
export default router;