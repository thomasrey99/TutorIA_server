const { Sequelize } = require("sequelize");
const injectModels = require("../../utils/injectModels");
const setUpRelations = require("../../utils/setUpRelations");

require('dotenv').config();
const { DATABASE_URL } = process.env;

//!Database instance
const database = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false
});

(async () => {
    try {
        await injectModels(database);
    } catch (error) {
        console.log("Error loading models", error);
    }
})();

setUpRelations(database.models);

module.exports = {
    database,
    ...database.models
};