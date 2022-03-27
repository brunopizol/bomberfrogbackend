const Sequelize = require("sequelize");

// //Local
const connection = new Sequelize('db_bomberfrog', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00',
    logging: console.log
})

module.exports = connection;