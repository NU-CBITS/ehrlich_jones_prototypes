(function() {
  'use strict';

  var Routes = {
    ROOT: '/',
    HOME: '/home',
    SESSIONS: '/session',
    LESSONS_CURRENT: '/lessons_current',
    LESSONS_ARCHIVE: '/lessons_archive',
    SETTINGS: '/settings',
    HISTORY: '/history',
    HELP: '/help',
    LEARN_ABOUT_ANCHORS: '/learn_about_anchors',
    TOOLS: '/tools',
    HANDBOOKS: '/handbooks',
    TIPS_ARCHIVE: '/tips_archive',
    TRACK_GOAL_PROGRESS: '/track_goal_progress',
    ADD_A_GOAL: '/add_a_goal',
    COMPLETED_GOALS: '/completed_goals'
  };

  angular.module('cbitsPrototype.constants')
         .constant('Routes', Routes);
})();
