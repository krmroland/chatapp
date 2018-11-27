const { io } = require('./app.js');

const userActions = require('./actions/users');
const addListener = (socket, listerner, callback) => {
    socket.on(listerner, (...payload) => callback(socket, ...payload));
};
io.on('connect', socket => {
    addListener(socket, 'user-was-authenticated', userActions.createUser);
});
