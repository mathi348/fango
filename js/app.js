'use strict';

var motoApp = angular.module('motoApp', [
  'ngRoute',
  'motoAppAnimations',
  'motoAppControllers',
  'motoAppServices',
  'myAppServices',
  'motoServices'
]);

motoApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/motos', {
      templateUrl: 'partials/inicio.html',
      controller: 'motoListController'
    }).
    when('/moto/:motoId', {
      templateUrl: 'partials/moto-detail.html',
      controller: 'motoListController'
    }).
    when('/motos/autos', {
      templateUrl: 'partials/autos.html',
      controller: 'autosController'
    }).
    when('/motos/motos', {
      templateUrl: 'partials/motos.html',
      controller: 'motosController'
    }).
    when('/motos/datos', {
      templateUrl: 'partials/datos.html',
      
    }).
    otherwise({
      redirectTo: '/motos'
    });
  }]);
