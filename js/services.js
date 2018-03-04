'use strict';

var motoAppServices = angular.module('motoAppServices', ['ngResource']);

motoAppServices.factory('Moto', ['$resource',
  function($resource) {
    return $resource('motos/:motoId.json', {}, {
      query: {method:'GET', params:{motoId:'inicio'}, isArray:true}
    });
   }
]);




angular.module('myAppServices', ['ngResource']).

    factory('Autos', function($resource){

  return $resource('motos/:resourceName.json', {}, {

    query: {method:'GET', params:{resourceName:'autos'}, isArray: true}

  });

});

angular.module('motoServices', ['ngResource']).

    factory('Motos', function($resource){

  return $resource('motos/:resourceName.json', {}, {

    query: {method:'GET', params:{resourceName:'motos'}, isArray: true}

  });

});    


