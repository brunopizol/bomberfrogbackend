const Sequelize = require("sequelize");
const connection = require("../database/database")

const Player = connection.define('players', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING,
        allowNull: false
    }, email: {
        type: Sequelize.STRING,
        allowNull: false
    }

})


Player.sync({force: false}).then(() => {});
module.exports = Player;