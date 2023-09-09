const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const app = express();

const server = http.createServer(app);


const io = socketio(server,{
    cors:{
        origin: '*',
    },
});

io.on('connection',socket=>{
    console.log('New ws connection');
    socket.emit('message','Welcome to ChitChat');
});

server.listen(3000,()=>{
    console.log('Server running on port 3000');
});
