const Responses = require("../response/response");

exports.getCourse = function(req, res) {
    const course_id = parseInt(req.params.course_id, 10);
    Responses.success(res, "Course ID is " + course_id, null);

};

exports.add = function(req, res) {
    var one = parseInt(req.params.numberone, 10);
    var two = parseInt(req.params.numbertwo, 10);
    Responses.success(res, "Numbers added", one + two);
};

exports.subtract = function(req, res) {
    var one = parseInt(req.params.numberone, 10);
    var two = parseInt(req.params.numbertwo, 10);
    Responses.success(res, "Numbers subtracted", one - two);
};