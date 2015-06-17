(function () {
    'use strict';

    angular.module("todo",[])
        .controller("ToDoController", function($scope){
            $scope.todos = [
                {"title": "Pet a puppy", "completed": false},
                {"title": "Bite a peach", "completed": false}
            ];

            $scope.delete = function(index){
                $scope.todos.splice(index, 1);
            };

            $scope.add = function(){
                $scope.todos.push({title: $scope.newTodo, completed: false});
                $scope.newTodo = "";
            }

            $scope.clearFinished = function() {
                $scope.todos = $scope.todos.filter(function(item){
                    return !item.completed;
                });
            }
        });


}());