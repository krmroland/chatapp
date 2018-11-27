const { mongoose } = require('../db');

const messageSchema = new mongoose.Schema({
    from_id: Number,
    to_id: Number,
    date: String,
    body: String,
});

const Message = mongoose.model('User', messageSchema);

module.exports = Message;
