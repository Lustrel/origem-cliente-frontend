"use strict";

angular
    .module("OrigemApp", [
        "ngRoute", 
        "DrwnSidebar"
    ])
    .config(function($routeProvider, $httpProvider, DrwnSidebarProvider){
        var templatesPath = "./dist/templates/pages";

        // Routes configuration
        $routeProvider
            .when("/", { redirectTo: "/entrar" })
            .when("/entrar", { templateUrl: (templatesPath + "/login/template/login.template.html") })
            ;
    });
; 
angular.module("AcadBoxItem", []);; 
angular.module("AcadContent", []);; 
"use strict";

angular.module("AcadForm", []);; 
"use strict";

angular.module("AcadInputPassword", []);; 
"use strict";

angular.module("DrwnInputText", []);; 
"use strict";

angular.module("AcadModal", []);; 
"use strict";

angular.module("AcadSelect", []);
; 
angular.module("DrwnSidebar", []);; 
angular.module("AcadTable", []);; 
"use strict";

angular.module("AcadTitlebar", []);; 
angular.module("AcadTopbar", []);; 
"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.directive("acadBoxItem", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/box-item/box-item.template.html",
			scope: {
				title: "@",
				titleButton: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.directive("acadCrudBoxItem", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/box-item/crud/crud-box-item.template.html",
			scope: {
				title: "@",
				columns: "=",
				data: "=",
				noDataText: "@",
				addMethod: "&",
				addLabel: "=",
				editMethod: "&",
				editLabel: "=",
				deleteMethod: "&",
				deleteLabel: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadContent")
		.directive("acadContent", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/content/content.template.html",
			scope: {}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadForm")
		.directive("acadForm", Directive);

	function Directive(){
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "./dist/templates/components/form/form.template.html",
			scope: {
				name: "=",
				title: "=",
				saveText: "=",
				saveMethod: "&",
				cancelText: "=",
				cancelMethod: "&"
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadInputPassword")
		.directive("acadInputPassword", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/input-password/input-password.template.html",
			scope: {
				model: "=",
				label: "=",
				validator: "&",
				errorText: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("DrwnInputText")
		.directive("acadInputText", Directive);

	function Directive(){
		return {
			restrict: "E",
			replace: true,
			templateUrl: "./dist/templates/components/input-text/input-text.template.html",
			scope: {
				model: "=",
				label: "=",
				validator: "&",
				errorText: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadModal")
		.directive("acadModal", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/modal/modal.template.html",
			scope: {}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadSelect")
		.directive("acadSelect", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/select/select.template.html",
			scope: {
				label: "=",
				model: "=",
				data: "=",
				description: "=",
				value: "="
			}
		};
	}

})();
; 
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
; 
"use strict";

(function(){

	angular
		.module("AcadTable")
		.directive("acadTable", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/table/table.template.html",
			scope: {
				columns: "=",
				data: "=",
				noDataText: "@",
				selectItemMethod: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadTitlebar")
		.directive("acadTitlebar", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/titlebar/titlebar.template.html",
			scope: {
				title: "@",
				breadcrumb: "="
			}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadTopbar")
		.directive("acadTopbar", Directive);

	function Directive(){
		return {
			restrict: "E",
			templateUrl: "./dist/templates/components/topbar/topbar.template.html",
			scope: {}
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("DrwnSidebar")
		.provider("DrwnSidebar", Provider);

	function Provider()
	{
		// Values acessed by config phase
		var configuration = { 
			menu: []
		};

		// Factory function (can be injected as a service)
		function DrwnSidebar(){

			function getMenu()
			{
				return configuration.menu;
			}

			function addMenuItem(id, text, link)
			{
				configuration.menu.push({id: id, text: text, link: link});
			}

			function setActiveItem(id)
			{
				configuration.menu.forEach(function(menu){
					menu.__isActive = (menu.id === id);
				});
			}

			return {
				__menu: configuration.menu,
				getMenu: getMenu,
				addMenuItem: addMenuItem,
				setActiveItem: setActiveItem
			};
		}

		return {
			$get: DrwnSidebar,
			config: configuration
		};
	}

})();
; 
"use strict";

(function(){

angular
	.module("AcadForm")
	.service("AcadFormService", [Service]);

function Service()
{
	this.hasAnyCharacter = function(content)
	{
		return (content && content.toString().length > 0);
	};
}

})();; 
"use strict";

(function(){

	angular
		.module("AcadModal")
		.service("AcadModalService", [
			"$rootScope",
			Service
		]);

	function Service($rootScope)
	{
		this.showMessage = function(title, message, buttons, dataToCallback)
		{
			buttons = ensureArray(buttons);
			var args = {title: title, message: message, buttons: buttons, dataToCallback: dataToCallback};
			$rootScope.$broadcast("AcadModalService.onReceiveMessage", args);
		};

		function ensureArray(item)
		{
			return (Array.isArray(item) ? item : [item]); 
		}
	}

})();; 
"use strict";

(function(){

	angular
		.module("AcadBoxItem")
		.controller("AcadCrudBoxItemController", [
			"$scope", 
			Controller
		]);

	function Controller($scope)
	{
		$scope.getColumnValue = function(item, column)
		{
			if(!column.value) 
				throw new Error("Columns need to have 'value' property");

			var chainOfKeys = column.value.split(".");
			var finalResult = item[chainOfKeys[0]];
			for(var i = 1; i < chainOfKeys.length; i++)
				finalResult =  finalResult[chainOfKeys[i]];
			
			return finalResult;
		};

		$scope.isThereNoData = function(data)
		{
			return (!data || data.length < 1);
		};
	}

})();
; 
"use strict";

(function(){

	angular
		.module("AcadModal")
		.controller("AcadModalController", [
			"$scope",
			Controller
		]);

	function Controller($scope)
	{
		(function initialize(){
			$scope.isVisible = false;
		})();

		$scope.$on("AcadModalService.onReceiveMessage", function(event, data){
			$scope.title = data.title;
			$scope.message = data.message;
			$scope.buttons = data.buttons;
			$scope.dataToCallback = data.dataToCallback;
			$scope.isVisible = true;
		});

		$scope.onButtonClick = function(clickedButton)
		{
			$scope.isVisible = false;

			if(clickedButton.method)
				clickedButton.method($scope.dataToCallback);
		};
	}

})();; 
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
; 
"use strict";

(function(){

	angular
		.module("AcadTable")
		.controller("AcadTableController", ["$scope", Controller]);

	function Controller($scope)
	{
		$scope.getColumnValue = function(item, column)
		{
			if(!column.value)
				throw new Error("Columns need to have 'value' property");

			var chainOfKeys = column.value.split(".");
			var finalResult = item[chainOfKeys[0]];
			for(var i = 1; i < chainOfKeys.length; i++)
				finalResult =  finalResult[chainOfKeys[i]];

			return finalResult;
		};

		$scope.isThereNoData = function(data)
		{
			return (!data || data.length < 1);
		};
	}

})();; 
"use strict";

(function(){

    angular
        .module("OrigemApp")
        .service("AcadHttp", ["$http", Service]);

    function Service($http)
    {
        this.get = function(route, query)
        {
            route = buildRoute(route);
            return $http.get(route);
        };

        this.post = function(route, data)
        {
            route = buildRoute(route);
            return $http.post(route, data);
        };

        this.delete = function(route)
        {
            route = buildRoute(route);
            return $http.delete(route);
        };
    
        function buildRoute(route)
        {
            return "../backend" + route;
        }
    }

})();
; 
(function(){
    angular
        .module("OrigemApp")
        .controller("LoginController", ["$scope", Controller]);

    function Controller($scope)
    {
        
    }
})();
