(function () {
  'use strict';

  function ManageUsersController() {

  	this.usersVisible = false;

  	this.showUsers = function(){
  		this.usersVisible = true;
  	}
  	this.hideUsers = function(){
  		this.usersVisible = false;
  	}

  }

  angular.module('cbitsPrototype.controllers')
    .controller('ManageUsersController',
    [ManageUsersController]);
})();
