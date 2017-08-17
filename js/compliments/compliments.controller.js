`use strict`;

(function(){
  var app = angular.module("Angularcomp");
  app.controller("complimentsController", ComplimentsController);

  function ComplimentsController(){
    var vm = this;
    var randomIndex = Math.floor(math.random()* data.length)
    vm.data = data[randomIndex];
  }

}());
