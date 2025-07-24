const { Sequelize } = require("sequelize");
require('dotenv').config();

//!Database instance
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;