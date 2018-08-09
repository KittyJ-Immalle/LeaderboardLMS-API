const userScript = require("./user-startscript.js");

const Models = require("../Models");

module.exports.startScript = function() {
    var userList = userScript.startScript();

    for (var key in userList) {
        var user = userList[key];
        Models.Users.create(user);
    }
}