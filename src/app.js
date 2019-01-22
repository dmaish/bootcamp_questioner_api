import express from 'express';
import sequelize from './database';

const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

export default app;