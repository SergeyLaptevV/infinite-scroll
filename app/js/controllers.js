var app = angular.module("myApp",[]);
    app.controller("myCtrl", function($scope,$http){
        //console.log("angular ok");
        $http.get("http://jsonplaceholder.typicode.com/photos").success(function(response){
            $scope.items = response;
        });
        $scope.limit = 12;
        $scope.loading = 3;
        $scope.loadImg = function(){
            //console.log($scope.limit);
            //console.log($scope.loading);
            $scope.limit = $scope.limit + $scope.loading;
        };
        $scope.activate = false;
        $scope.removeItem = function (item) {
            $scope.items.splice(item, 1);
        };
    });