const socket = require("socket.io")
const cors = require("cors");
const express = require("express");
const path = require("path");
const multer = require("multer");
const path = require("path")
const db = require('./query.js');
const port = 4000;


const app = express();
const upload = multer({ dest: '../storage/img/' });


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

app.get('/login/:uuid', db.getOneUser)
app.post('/signup', db.createAccount)
app.post('/img', upload.single('pdp'), db.addImage)
app.post('/login', db.login)