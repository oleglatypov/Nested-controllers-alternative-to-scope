/**
 * Created by oleglatypov on 5/11/16.
 */

var myApp = angular.module('myApp',[]);// ('myApp',[]) this what angular is looking in HTML <html lang="en" ng-app="myApp">



myApp.controller('parent1Controller',['$scope', function ($scope) {

    $scope.parent1vm = {};
    $scope.parent1vm.message = "Parent 1 Message!";

}]); // controller for parent1Controller


myApp.controller('child1Controller',['$scope', function ($scope) {

    $scope.child1vm = {};
    $scope.child1vm.message = "Child 1 Message!";

}]); // controller for parent1Controller -> child1Controller





myApp.controller('parent2Controller',[function () {
    
    this.message = "Parent 2 Message!";

}]); // controller for parent2Controller


myApp.controller('child2Controller',[function () {
    
    this.message = "Child 2 Message!";

}]); // controller for parent2Controller -> child2Controller