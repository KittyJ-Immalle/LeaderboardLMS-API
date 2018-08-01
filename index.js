const Express = require("express");
const BodyParser = require("body-parser");
const Session = require("express-session");
const App = Express();

App.use(Session({ secret: "secret_seed", resave: false, saveUnitialized: false, secure: false, rolling: true}));
App.use(BodyParser.urlencoded({ extended: true}));
App.use(BodyParser.json());

require("./routers/course-router.js")(App);

App.listen(11000, () => {
    console.log("Leaderboard LMS API active on port 11000!");
});
