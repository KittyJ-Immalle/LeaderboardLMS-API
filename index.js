const Express = require("express");
const BodyParser = require("body-parser");
const Session = require("express-session");
const App = Express();

const masterStartScript = require("./scripts/master-script.js");
const Models = require("./models");

App.use(Session({ secret: "secret_seed", resave: false, saveUninitialized: false, secure: false, rolling: true}));
App.use(BodyParser.urlencoded({ extended: true}));
App.use(BodyParser.json());

require("./routers/course-router.js")(App);

Models.sequelizeCredentials.sync({force: true}).then(() => {
    masterStartScript.startScript();

    App.listen(11000, () => {
        console.log("Leaderboard LMS API active on port 11000")
    });
}).catch( e => {console.error(e); });
