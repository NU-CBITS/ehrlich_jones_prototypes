(function () {
  'use strict';

  function NewActivityController() {

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('NewActivityController',
    [NewActivityController]);
})();
