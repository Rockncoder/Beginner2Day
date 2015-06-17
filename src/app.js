(function(){
    "use strict";



    angular.module("BeginApp", ['ngRoute', 'datePicker', 'bob'])
        .directive("helloDirective", function(){
            var counter = 0;
            var rpl = true;

            return {
                transclude: true,
                restrict: "E",
                template:"<div><div ng-transclude></div><h3>{{$parent.firstName}}-{{title}}:{{count}}</h3></div>",
                replace: true,
                scope: {
                    title: "@title"
                },
                link: function($scope, $element, $attrs){
                    $scope.count = ++counter;
                }
            };
        });
}());