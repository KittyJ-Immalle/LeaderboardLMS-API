module.exports = function(sequelize, Sequelize) {
    const Users = sequelize.define("Users", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            field: "user_id"
        },

        email: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        username: {
            type: Sequelize.STRING
        },

        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
        
    }, {underscored: true});

    Users.insert = async function(email, username, password, status, activation) {
        const user = {
            email: email,
            username: username,
            password: password,
            status: status,
            activation
        };

        return await this.create(user);
    }

    return Users;
}