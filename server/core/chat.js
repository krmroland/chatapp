const Message = require("../models/Message");

const { io } = require("./app");

const connectedCallback = socket => {
    socket.on("message", body => {
        message = new Message({ body });
        io.emit("message", message);
        message.save();
    });
    socket.on("typing", () => {
        io.emit("typing");
    });
};

const disconnectedCallback = stock => {};

io.on("connection", connectedCallback);

io.on("disconnect", disconnectedCallback);
