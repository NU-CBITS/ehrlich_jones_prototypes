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
    TOOLS: '/tools',
    HANDBOOKS: '/handbooks',
    CREATE_NEW_ACTIVITY: '/create_new_activity',
    MANAGE_ACTIVITIES: '/manage_activities',
    MANAGE_USERS: '/manage_users'
  };

  angular.module('cbitsPrototype.constants')
         .constant('Routes', Routes);
})();
