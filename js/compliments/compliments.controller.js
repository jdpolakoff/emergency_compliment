`use strict`;

(function(){
  var app = angular.module("compliments");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    let randomIndex = Math.floor(Math.random() * data.length)
    this.data = data[randomIndex]; 
  }

}());
