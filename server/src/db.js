const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/chatapp');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = { mongoose, db };
