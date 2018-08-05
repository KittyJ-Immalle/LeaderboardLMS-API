const path = require("path");
const Sequelize = require("sequelize");
const fs = require("fs"); // File system: Used to navigate and read files

const sequelizeCredentials = new Sequelize("LeaderboardLMS", "Kitty", "111", {
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

const db = {};

fs.readdirSync(__dirname).filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function(file){
    const model = sequelizeCredentials.import(path.join(__dirname, file));
    db[model.name] = model;
});

db.sequelizeCredentials = sequelizeCredentials;
db.Sequelize = Sequelize;

db.Users = require("./users")(sequelizeCredentials, Sequelize);

module.exports = db;