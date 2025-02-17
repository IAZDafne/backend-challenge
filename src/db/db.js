const { Sequelize } = require('sequelize');
const { database } = require('./config.js');


const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password, {
        host: database.host,
        dialect: 'postgres',
        logging: false
    })