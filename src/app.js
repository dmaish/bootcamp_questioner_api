import express from 'express';
import sequelize from './database';
import authRouter from './modules/auth';
import modules from './modules';
import bodyParser from 'body-parser';

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))


app.use(bodyParser.json())

app.use(authRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// THIS FUNCTION SHOULD BE THE ONE SETTING UP THE MIDDLEWARES...CHECK THIS OUT ASAP!!!
modules(app);

export default app;