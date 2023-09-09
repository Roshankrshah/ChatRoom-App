const socket = io('http://localhost:3000');

socket.on('connect',()=>{
    console.log(`you connected with id: ${socket.id}`);
});

socket.emit('custom-event',10,'hi',{a:'a'});