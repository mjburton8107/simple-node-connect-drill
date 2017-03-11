var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var chatCtrl = require('./controllers/chatCtrl');
var port = 3737;

// TODO server front end files with static

app.use(bodyParser.json());

// TODO Initialize Session
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
}))

app.post("/api/screenname", function(req, res){
  req.session.screenname = req.body.screenname;
  res.send(req.session.screenname);
})

app.get("/api/chats", chatCtrl.getChats);
app.post("/api/chats", chatCtrl.postChats);
app.delete("/api/chats", chatCtrl.deleteChats);



app.listen(port, function(){
  console.log("Listeing on port ", port, " INSERT-WITTY-STATEMENT-HERE");
});

app.use(express.static('public'));
