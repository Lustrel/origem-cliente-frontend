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
