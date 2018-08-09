module.exports = function(sequelize, Sequelize) {
    const Roles = sequelize.define("Roles", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            field: "role_id"
        },

        /* Stores the roles of the user. Either student or admin/teacher */
        rank: {
            type: Sequelize.STRING
        }
    }, {underscored: true});

    exports.insertRole = async function(course_id, user_id, rank) {
        const role = {
            course_id: course_id,
            user_id: user_id,
            rank: rank
        };

        return await this.create(role);
    }

    return Roles;
}