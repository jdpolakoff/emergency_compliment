`use strict`;

(function(){
  var app = angular.module("Angularcomp");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    let randomIndex = Math.floor(Math.random() * data.length)
    this.data = data[randomIndex];
  }

}());
