angular.module(apiApp).service('swapiVehicleService', function($http){

this.getVehicles = function(){
  var rootVehicles = 'http://swapi.co/api/vehicles';
  return $http({
  method: 'GET',
  url: rootVehicles
}).then(function(webResponse){
  if (webResponse.status != 200) {
    return "FAILSSSSS";
}

return webResponse.data;

})


}

});
