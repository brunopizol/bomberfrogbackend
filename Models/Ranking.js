const Sequelize = require("sequelize");
const Player = require("./Player")
const connection = require("../database/database")

const Ranking = connection.define('ranking', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }, points: {
        type: Sequelize.INTEGER,
        allowNull: false
    }, 

})

Ranking.hasMany(Player); // uma categoria tem muitos artigos
// Article.belongsTo(Category); //um artigo pertence a uma categoria

Ranking.sync({force: false}).then(() => {});
module.exports = Ranking;