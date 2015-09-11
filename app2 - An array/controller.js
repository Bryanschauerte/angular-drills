
//service is a dependancy injection
angular.module('arrayApp').controller('arrayController', function($scope, employeeService){


$scope.employees = employeeService.getEmployees();

});
