const socket = require("socket.io")
const express = require("express");
const bodyParser = require("body-parser");
const corse = require("cors");
const path = require("path")
const app = express();
const db = require('./query.js');
const port = 4000;

const url_front = "";
const server = app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
});

app.use(express.json())

const io = socket(server,{
    cors : {
        origin : url_front,
        credentials : true
    }
});

io.on("connect",function(socket){
    socket.on("send-message",function(){})
    socket.emit("receive-message","coucou")

    socket.emit("receive-notification","");
})

app.get('/login/:uuid', db.getOneUser)
app.post('/signup', db.createAccount)
app.get('/', (request, response)=>{
  response.sendFile("client.html", {root: path.join(__dirname)})
})
app.get('/client.js', (request, response)=>{
  response.sendFile("client.js", {root: path.join(__dirname)})
})
