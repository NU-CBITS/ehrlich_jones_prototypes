(function () {
  'use strict';

  function AddAGoalController() {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('AddAGoalController',
    [AddAGoalController]);
})();
