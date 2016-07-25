(function () {
  'use strict';

  function TrackGoalProgressController($location, LessonPlans) {

    this.lessons = LessonPlans;

    this.times = [
      {name:'1-9 minutes'},
      {name:'10-19 minutes'},
      {name:'20-29 minutes'},
      {name:'30-39 minutes'},
      {name:'40-49 minutes'},
      {name:'50-59 minutes'},
      {name:'60-69 minutes'},
      {name:'70-79 minutes'},
      {name:'80-89 minutes'},
      {name:'90-99 minutes'},
    ];
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('TrackGoalProgressController',
    [ '$location', 'LessonPlans', TrackGoalProgressController]);
})();
