(function() {
  'use strict';

  var User = {
    firstName:'Linda',
    startDate: new Date(),
    currentGoal: ''
  };

  angular.module('cbitsPrototype.constants')
         .constant('User', User);
})();
