module.exports = function(sequelize, Sequelize) {
    const Courses = sequelize.define("Courses", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
            field: "course_id"
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },

        description: {
            type: Sequelize.STRING
        },

        coordinator: {
            type: Sequelize.STRING,
        },
        
        pictureLink: {
            type: Sequelize.STRING,
            defaultValue: "https://image.freepik.com/free-icon/electronic-circular-printed-circuit_318-50817.jpg"
        },

        allowInvitations: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },

        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    }, {underscored: true});
        
    Courses.insertCourse = async function(name, description, coordinator, pictureLink, allowInvitations) {
        const courseDetails = {
            name: name,
            description: description,
            coordinator: coordinator,
            pictureLink: pictureLink,
            allowInvitations: allowInvitations
        }

        return await this.create(courseDetails);
    }

    return Courses;
}