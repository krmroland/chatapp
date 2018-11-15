const { mongoose } = require("../core/db");

const messageSchema = new mongoose.Schema({
    body: String
});

const Message = mongoose.model("User", messageSchema);

module.exports = Message;
