'use strict';

var app = angular.module( 'app' , [ 'ngRoute' , 'controllers' ] );

app.config( [ '$routeProvider' , '$httpProvider' , function( $routeProvider , $httpProvider ) {

    $routeProvider.when( '/products' , {
        controller : 'products',
        templateUrl : 'partials/site/products.html'
    });

    $routeProvider.when( '/product/:id' , {
        controller: 'product',
        templateUrl : 'partials/site/product.html'
    });

    $routeProvider.otherwise({
        redirectTo: '/home'
    });

}]);

// app.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ){
//
//     $http({
//         method: 'get',
//         url: 'model/produkty.json'
//     }).then(function (response) {
//         $scope.products = response.data;
//     },function (error){
//         console.log(error, 'can not get data.');
//     });
//
// }]);
