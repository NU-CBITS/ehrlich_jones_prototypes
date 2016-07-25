(function () {
  'use strict';

  function AddAGoalController() {

    this.pagesVisible = [true,false,false];

    this.showPage = function(pageIndex){

      for (var i = 0; i < this.pagesVisible.length; i++){

          this.pagesVisible[i] = false;

      }

      this.pagesVisible[pageIndex] = true;

    }

    this.confirmationVisible = false;

    this.showConfirmation = function(){
      this.confirmationVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('AddAGoalController',
    [AddAGoalController]);
})();
