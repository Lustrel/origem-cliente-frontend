"use strict";

(function(){

	angular
		.module("DrwnSidebar")
		.directive("acadSidebar", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/sidebar/sidebar.template.html",
			scope: {}
		};
	}

})();
