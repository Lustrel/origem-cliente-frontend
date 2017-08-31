"use strict";

(function(){

	angular
		.module("DrwnSidebar")
		.controller("DrwnSidebarController", ["$scope", "$location", "DrwnSidebar", Controller]);

	function Controller($scope, $location, DrwnSidebar)
	{
		$scope.menu = [];

		(function initialize(){
			$scope.menu = DrwnSidebar.getMenu();
		})();

		$scope.isActive = function(item)
		{
			return !!(item.__isActive);
		};

		$scope.$watch(
			function(){ return $location.$$path; },
			setActiveMenuItem
		);

		function setActiveMenuItem(newPath)
		{
			newPath = newPath.split("/")[1];
			$scope.menu.map(function(item){
				item.__isActive = (item.id == newPath);
			});
		}
	}

})();
