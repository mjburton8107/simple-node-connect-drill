angular.module("myChats").controller("mainCtrl", function($scope, mainSrvc, $interval){

  $scope.chatAppName = "Name my chatapp";

  //Dummy data to show what the chat messages should look like
  // to work with the frontend
  // TODO Remove once server is integrated;

  $scope.addChat = function(chatmessage){
     mainSrvc.addChats(chatmessage).then(function(response){
      $scope.chats.push(response.message)
    });
  }

  function getChats(){
    mainSrvc.getChats().then(function(response) {
      $scope.chats = response;
    })
  }

  $scope.deleteChats = function(){
    mainSrvc.deleteChats();
  }

  // Gets initial chats
  getChats();

  // Set up repeating call to get chats
  $interval(getChats, 3000);

  $scope.setScreenname = function(name){
    mainSrvc.setScreenname(name).then(function(response){
      console.log('this is response.data.screenname', response.data.screenname)
      $scope.screenname = response.data.screenname
    })
  };

})
