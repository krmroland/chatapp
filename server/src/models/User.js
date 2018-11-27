const { mongoose } = require('../db');

const userShema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    image: String,
    password: String,
});

const User = mongoose.model('User', userShema);

module.exports = User;
