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
                .when("/members", {
                    templateUrl: "templates/members.html",
                    controller: "MembersController"
                })
                .when("/photos", {
                    templateUrl: "templates/photos.html",
                    controller: "PhotosController"
                })
                .when("/events", {
                    templateUrl: "templates/events.html",
                    controller: "EventsController"
                })
                // in case there are no matches - send the user to the home page
                .otherwise({
                    redirectTo: '/home'
                });
        });
}());