import express from 'express';
import AuthController from './AuthController';

const authRouter = express.Router();

authRouter.post('/api/v1/register', 
    AuthController.registerUser
);

export default authRouter;
