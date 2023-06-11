const socket = require("socket.io")
const express = require("express");
const app = express();
const db = require('./query.js');

const url_front = "";
const server = app.listen(4000,function (){});

const io = socket(server,{
    cors : {
        origin : url_front,
        credentials : true
    }
});

io.on("connect",function(socket){
    socket.on("send-message",function(){})
    socket.emit("receive-message","coucou")
})