const { mongoose } = require("../core/db");

const userShema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userShema);

module.exports = User;
