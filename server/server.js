const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const app = express();

const server = http.createServer(app);


const io = socketio(server,{
    cors:{
        origin: '*',
    },
});

const botName = 'ChitChat Bot'

io.on('connection',socket=>{
    socket.emit('message',formatMessage(botName,'Welcome to ChitChat'));

    socket.broadcast.emit('message',formatMessage(botName,'A user has joined the chat'));

    socket.on('disconnect',()=>{
        io.emit('message',formatMessage(botName,'A user has left the chat'));
    });

    socket.on('chatMessage',(msg)=>{
        io.emit('message',formatMessage('USER',msg));
    });
});

server.listen(3000,()=>{
    console.log('Server running on port 3000');
});
