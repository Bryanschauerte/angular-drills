 var app = angular.module('redoNumberTwo').controller('redoControl', function($scope, redoService){
//impliict notation^^ (also implict binding left of the dot)
//var app = angular.module('redoNumberTwo').controller('redoControl', ['$scope', 'redoService', function($scope, redoService){





  $scope.employees = redoService.getEmployees();

// $scope.$watch('theFilter', function(old, newValue){
//   var ourFilter = {};
//   if(!newValue){
//     return;
//   }
//   var split = newValue.split(',');
//   for(var i =0; i <slpit.length; i++){
//     var piece = split[i];
//     var pieces = piece.split(':');
//     var propertyName = piece[0];
//     var searchVal = =piece[i];
//
//   }
//
//
// })

});
