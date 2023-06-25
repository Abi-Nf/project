const socket = require("socket.io")
const express = require("express");
const bodyParser = require("body-parser");
const corse = require("cors");
const path = require("path");
const multer = require("multer");
const db = require('./query.js');
const port = 4000;

const app = express();
const upload = multer({ dest: '../storage/img/' });

const url_front = "";
const server = app.listen(port,()=>{
    console.log(`Listen on the port ${port}`);
});

app.use(express.json())
/**app.use(cors()) *//**a configurer */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Vous pouvez remplacer "*" par un domaine spécifique pour limiter l'accès
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // Méthodes HTTP autorisées
  res.header("Access-Control-Allow-Headers", "Content-Type"); // Headers autorisés
  next();
});

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
app.post('/img', upload.single('pdp'), db.addImage)
/**
app.get('/', (request, response)=>{
  response.sendFile("client.html", {root: path.join(__dirname)})
})
app.get('/client.js', (request, response)=>{
  response.sendFile("client.js", {root: path.join(__dirname)})
})
 */