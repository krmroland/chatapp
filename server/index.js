require('./src/chat');

const { server } = require('./src/app');

server.listen(9000, () => {
    console.log('Listening on port 9000');
});
