const socket = require("socket.io")
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require('./query.js');
const port = 4000;

const url_front = "";
const server = app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
});

app.use(express.json())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
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
