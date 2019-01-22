import app from './../app';
import authRouter from './auth';

const apiPrefix = '/api/v1';

app.use(apiPrefix, authRouter);

export default app;