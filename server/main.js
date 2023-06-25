const socket = require("socket.io")
const cors = require("cors");
const express = require("express");
const db = require('./query.js');
const port = 4000;
const app = express();


app.use(express.json());
app.use(cors());

const url_front = "";
const server = app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
});

const io = socket(server,{
    cors : {
        origin : url_front,
        credentials : true
    }
});

io.on("connect",function(socket){
    socket.on("send-message",function({from,to,content_text}){
        socket.emit("receive-message",content_text);
    });

    socket.emit("receive-notification","");
})

app.get('/login', db.getOneUser)
