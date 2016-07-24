(function () {
  'use strict';

  function IndexController($location) {

  	this.activities = [

  		{name:'Go for a walk', icon:'bicycle'},
  		{name:'Play ping pong', icon:'bicycle'},
  		{name:'Go spinning', icon:'bicycle'}

  	]

  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('IndexController',
    [ '$location',IndexController]);
})();
