const socket = require("socket.io")
const cors = require("cors");
const express = require("express");
<<<<<<< HEAD
=======
const bodyParser = require("body-parser");
const corse = require("cors");
const path = require("path")
const app = express();
>>>>>>> 42c47ce900b0160f7e6cc8733dcdf671a07640b2
const db = require('./query.js');
const port = 4000;
const app = express();


app.use(express.json());
app.use(cors());

const url_front = "";
const server = app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
});

<<<<<<< HEAD
=======
app.use(express.json())

>>>>>>> 42c47ce900b0160f7e6cc8733dcdf671a07640b2
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

app.get('/login/:uuid', db.getOneUser)
app.post('/signup', db.createAccount)

app.get('/', (request, response)=>{
  response.sendFile("client.html", {root: path.join(__dirname)})
})
app.get('/client.js', (request, response)=>{
  response.sendFile("client.js", {root: path.join(__dirname)})
})
