/* Declare app level module which depends on filters, and services */
(function() {
  'use strict';

  var Application = {
    self: this,

    configure: function configure($routeProvider, Routes) {
      $routeProvider
        .when(Routes.ROOT, {
          templateUrl: 'partials/index.html',
          controller: 'IndexController',
          controllerAs: 'index'
        })
        .when(Routes.HOME, {
          templateUrl: 'partials/index.html',
          controller: 'IndexController',
          controllerAs: 'index'
        })
        .when(Routes.SESSIONS, {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.SESSIONS + '/:lessonId', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.SESSIONS + '/:lessonId/:onEndURI', {
          templateUrl: 'partials/session.html',
          controller: 'SessionsController',
          controllerAs: 'session'
        })
        .when(Routes.HISTORY, {
          templateUrl: 'partials/history.html',
          controller: 'HistoryController',
          controllerAs: 'history'
        })
        .when(Routes.LESSONS_CURRENT, {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent'
        })
        .when(Routes.LESSONS_CURRENT+ '/:lessons_index', {
          templateUrl: 'partials/lessons_current.html',
          controller: 'LessonsCurrentController',
          controllerAs: 'lessonsCurrent'
        })
        .when(Routes.LESSONS_ARCHIVE, {
          templateUrl: 'partials/lessons_archive.html',
          controller: 'LessonsArchiveController',
          controllerAs: 'lessonsArchive'
        })
        .when(Routes.SETTINGS, {  
          templateUrl: 'partials/settings.html',
          controller: 'SettingsController',
          controllerAs: 'settings'
        })
        .when(Routes.HELP, {  
          templateUrl: 'partials/help.html',
          controller: 'HelpController',
          controllerAs: 'help'
        })
        .when(Routes.TOOLS, {  
          templateUrl: 'partials/tools.html',
          controller: 'ToolsController',
          controllerAs: 'tools'
        })
        .when(Routes.HANDBOOKS, {  
          templateUrl: 'partials/handbooks.html',
          controller: 'HandbooksController',
          controllerAs: 'handbooks'
        })
        .when(Routes.TRACK_GOAL_PROGRESS, {  
          templateUrl: 'partials/track_goal_progress.html',
          controller: 'TrackGoalProgressController',
          controllerAs: 'progress'
        })        
        .when(Routes.ADD_A_GOAL, {  
          templateUrl: 'partials/add_a_goal.html',
          controller: 'AddAGoalController',
          controllerAs: 'add'
        })
        .when(Routes.COMPLETED_GOALS, {  
          templateUrl: 'partials/completed_goals.html',
          controller: 'CompletedGoalsController',
          controllerAs: 'completed'
        })
        .when(Routes.NEW_ACTIVITY, {  
          templateUrl: 'partials/new_activity.html',
          controller: 'NewActivityController',
          controllerAs: 'activity'
        })

    },
    run: function run($rootScope, $location, $q, $window, 
                      Routes, sessionQuestionService, resourceCache,
                      sessionsService, sessionsCache,
                      sessionAnswerCache) {

      function configurationIncompleteRouting() {
          $location.url(Routes.HOME);
      }

      function determineRouteFromState() {
          $location.url(Routes.HOME);
      }

    }
  };

  angular.module('cbitsPrototype.constants', []);
  angular.module('cbitsPrototype.directives',
      ['cbitsPrototype.controllers', 'cbitsPrototype.services','cbitsPrototype.constants']);
  angular.module('cbitsPrototype.resources',
      ['ngResource', 'cbitsPrototype.services', 'cbitsPrototype.constants']);
  angular.module('cbitsPrototype.controllers',
      ['cbitsPrototype.directives','cbitsPrototype.constants', 'cbitsPrototype.resources', 'cbitsPrototype.services', 'ui.bootstrap']);
  angular.module('cbitsPrototype.services',
      ['cbitsPrototype.resources', 'cbitsPrototype.constants']);
  angular.module('cbitsPrototype-app',
      ['ngRoute', 'anguvideo', 'mobiscroll-datetime', 'cbitsPrototype.controllers',
        'cbitsPrototype.resources', 'cbitsPrototype.services', 'cbitsPrototype.constants'])
      .config(['$routeProvider', 'Routes', Application.configure])
      .run(['$rootScope', '$location', '$q', '$window',
        'Routes', 
        'contentService','resourceCache', 'sessionsService', 
        'sessionsCache',
        'sessionAnswerCache', Application.run]);
})();
