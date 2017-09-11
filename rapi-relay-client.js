const io = require('socket.io-client');
const socketClient = io('http://localhost');

socketClient.on('news', function (data) {
    console.log(data);
    socketClient.emit('my other event', { my: 'data' });
});

