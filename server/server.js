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
    socket.emit('message','Welcome to ChitChat');

    socket.broadcast.emit('message','A user has joined the chat');

    socket.on('disconnect',()=>{
        io.emit('message','A user has left the chat');
    });

    socket.on('chatMessage',(message)=>{
        io.emit('message',message);
    });
});

server.listen(3000,()=>{
    console.log('Server running on port 3000');
});
