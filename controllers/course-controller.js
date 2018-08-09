const Responses = require("../response/response");
const Models = require("../models");

exports.getCourse = function(req, res) {
    const course_id = parseInt(req.params.course_id, 10);
    Responses.success(res, "Course ID is " + course_id, null);

};

exports.insertCourse = function(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const coordinator = req.body.coordinator;
    const pictureLink = req.body.pictureLink;
    const allowInvitations = req.body.allowInvitations;

    Models.Courses.insertCourse(name, description, coordinator, pictureLink, allowInvitations).then(function(course) {
        Responses.success(res, "Course created!", course);
    });
}