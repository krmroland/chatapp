const Message = require("../models/Message");

const fetchAllMessage = (req, res) =>
    Message.find({}, (error, messages) => res.json(messages));

module.exports = {
    fetchAllMessage
};
