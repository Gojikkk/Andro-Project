import express, { Router } from 'express';
import { getAllUsersController, createUserController, getUserByIdController } from '../services/userService';

router.get ('/users', getAllUsersController);
router.post ('/users', createUserController);
router.get ('/users/:id', getUserByIdController);

export default router;