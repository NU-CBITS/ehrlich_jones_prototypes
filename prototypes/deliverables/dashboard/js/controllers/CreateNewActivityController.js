(function () {
  'use strict';

  function CreateNewActivityController() {

  	this.usersVisible = false;

  	this.showUsers = function(){
  		this.usersVisible = true;
  	}
  	this.hideUsers = function(){
  		this.usersVisible = false;
  	}

  }

  angular.module('cbitsPrototype.controllers')
    .controller('CreateNewActivityController',
    [CreateNewActivityController]);
})();
