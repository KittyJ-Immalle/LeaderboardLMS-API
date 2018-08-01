const CourseController = require("../controllers/course-controller");

module.exports = function(app){
    app.get("/course/:course_id", CourseController.getCourse);
    app.get("/add/:numberone/:numbertwo", CourseController.add);
    app.get("/subtract/:numberone/:numbertwo", CourseController.subtract);
}