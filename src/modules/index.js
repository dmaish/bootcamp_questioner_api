import app from './../app';
import authRouter from './auth';

const apiPrefix = '/api/v1';

const allRoutes = (app) => {
    app.use(apiPrefix, authRouter);
}

export default allRoutes;