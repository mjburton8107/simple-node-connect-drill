angular.module("myChats").service("mainSrvc", function($http){

  this.setScreenname = function(name){
    return $http({
      method: 'POST',
      url: '/api/screenname',
      data: {screenname : name}
    }).then(function(response){
      console.log('this is response', response.config);
      return response.config;
    })
  }

  this.getChats = function(){
    return $http({
      method: 'GET',
      url: '/api/chats'
    }).then(function(response) {
      return response.data;
    })
  }

  this.addChats = function(chat){
    return $http({
      method: 'POST',
      url: '/api/chats',
      data: chat
    }).then(function(response){
      return response.data;
    })
  }

  this.deleteChats = function(){
    return $http({
      method: 'DELETE',
      url: '/api/chats'
    })
  }
});
