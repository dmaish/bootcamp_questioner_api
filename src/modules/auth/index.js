import express from 'express';
import AuthController from './AuthController';

express = express();

authRouter = express.Router();

authRouter.get('api/v1/register', () => {
    // insert middleware here
    AuthController.registerUser();
});

export default authRouter;
