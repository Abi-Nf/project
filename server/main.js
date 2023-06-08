const db = require('./query.js');

const socket = require("socket.io")

const io = socket({
    origin : "url",
    cors : {
        credential : true,
    }
})

io.on("connect",function(socket){
    socket.on("send-message",function(){})
    socket.emit("receive-message","coucou")
})