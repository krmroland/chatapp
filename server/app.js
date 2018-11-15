require("./routes");

require("./core/chat");

const { server } = require("./core/app");

server.listen(9000, () => {
    console.log("Listening on port 9000");
});
