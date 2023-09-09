const chatForm = document.getElementById('chat-form');

const socket = io('http://localhost:3000');

socket.on('message',(message)=>{
    console.log(message);
    outputMessage(message);
});

chatForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    
    socket.emit('chatMessage',msg);
});

function outputMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `
        <p class="meta">Brad <span>9.12</span></p>
        <p class="text">
            ${message}
        </p>`;
    
    document.querySelector('.chat-messages').appendChild(div);
}
