'use strict';

var motoAppControllers = angular.module('motoAppControllers', []);

motoAppControllers.controller('motoListController', ['$scope', 'Moto',
  function($scope, Moto) {
      $scope.motos = Moto.query();
      $scope.orderProp = 'model';
}]);

motoAppControllers.controller('motoDetailCtrl', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto) {
    $scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto) {
      $scope.mainImageUrl = moto.images[0];
    });
    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    }
}]);


 
motoAppControllers.controller('autosController', ['$scope', 'Autos',
  function($scope, Autos) {
      $scope.aceites = Autos.query();
      $scope.orderProp = 'model';
}]);

motoAppControllers.controller('motosController', ['$scope', 'Motos',
  function($scope, Motos) {
      $scope.aceites = Motos.query();
      $scope.orderProp = 'model';
}]);
