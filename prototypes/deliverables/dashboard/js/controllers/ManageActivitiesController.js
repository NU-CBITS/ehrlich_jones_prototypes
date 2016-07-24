(function () {
  'use strict';

  function ManageActivitiesController($location) {

    this.olderPostsVisible = false;

    this.showOlderPosts = function(){
      this.olderPostsVisible = true;
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('ManageActivitiesController',
    [ '$location',ManageActivitiesController]);
})();
