var chats = [];
module.exports = {

  getChats:function(req,res){
    res.send(chats);
  },
  postChats:function(req,res){

    chats.push(req.body);
    res.send(chats);

  },
  deleteChats:function(req,res){
    chats.splice(0, chats.length);
    res.send(chats);
  }
}
