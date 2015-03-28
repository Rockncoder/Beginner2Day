(function () {
    "use strict";

    angular.module("BeginApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    redirectTo: "/home"
                })
                .when("/home", {
                    templateUrl: "templates/home.html",
                    controller: "HomeController"
                })
                .when("/about", {
                    templateUrl: "templates/about.html",
                    controller: "AboutController"
                })
                // in case there are no matches - send the user to the home page
                .otherwise({
                    redirectTo: '/home'
                });
        });
}());