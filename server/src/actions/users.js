const User = require('../models/User');

const createUser = (socket, data) => {
    User.findOne({ id: data.id }, (error, user) => {
        if (!user) {
            user = new User(data);
            user.save();
        }

        User.find({ id: { $ne: user.id } }, (error, contacts) => {
            socket.emit('authenticated-user-data', {
                messages: [{ _id: 1, body: 'Hello world' }],
                contacts: contacts,
            });
        });
    });
};
module.exports = {
    createUser,
};
