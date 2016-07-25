(function () {
  'use strict';

  function IndexController($location) {

  	this.activities = [
  		{name:'Go for a walk', icon:'bicycle', numberComplete:0, weeklyFrequency:4},
  		{name:'Play ping pong', icon:'bicycle', numberComplete:4, weeklyFrequency:5},
  		{name:'Go spinning', icon:'bicycle', numberComplete:3, weeklyFrequency:3}
  	]

 	this.loopGenerator = function(length){

 		var counter = length;
 		var arrayGenerated = new Array()

 		for (var i = 0; i< counter; i++){

 			arrayGenerated.push(i);

 		}

 		return arrayGenerated

 	}
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('IndexController',
    [ '$location',IndexController]);
})();
