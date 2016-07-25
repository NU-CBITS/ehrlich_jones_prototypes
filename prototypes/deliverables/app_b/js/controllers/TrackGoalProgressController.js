(function () {
  'use strict';

  function TrackGoalProgressController($location, LessonPlans) {

    this.lessons = LessonPlans;

    this.goToLesson = function (lessonNumber){
      $location.path('/lessons_current');
    }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('TrackGoalProgressController',
    [ '$location', 'LessonPlans', TrackGoalProgressController]);
})();
