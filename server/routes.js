const {app} = require("./core/app");

const { fetchAllMessage } = require("./actions/messages");

app.get("/messages", fetchAllMessage);
