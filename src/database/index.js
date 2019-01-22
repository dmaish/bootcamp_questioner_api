import Sequelize from 'sequelize';

// const env = process.env
const sequelize = new Sequelize('postgres://dmaish:password@localhost:5432/questioner_db');

export default sequelize;