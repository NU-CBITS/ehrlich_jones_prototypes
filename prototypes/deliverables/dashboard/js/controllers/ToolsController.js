(function () {
  'use strict';

  function ToolsController($location, $filter, LessonPlans) {

  	this.availableLessonPlans = $filter('filter')(LessonPlans,{available:true});
  	
  	this.availableTools = function(){
	  	var availableTools = new Array();
	  	for (var i=0; i < this.availableLessonPlans.length; i++){
	  		for (var i2=0; i2 < this.availableLessonPlans[i].modules.length; i2++){

	  			if (this.availableLessonPlans[i].modules[i2].type == 'tool'){
	  			availableTools.push(this.availableLessonPlans[i].modules[i2])
	  			}	
	  		
	  		}
	  	}

	  	return availableTools
	 }
  
  }

  angular.module('cbitsPrototype.controllers')
    .controller('ToolsController',
    [ '$location', '$filter', 'LessonPlans',ToolsController]);
})();
