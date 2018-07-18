var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);

app.controller('listData', function ($scope, $http) {
    $scope.users = [];
    $http.get('http://localhost/Pagination/mockjson/mock.json').success(function (response) {
        $scope.users = response;
    });

    $scope.sort = function (keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };
});