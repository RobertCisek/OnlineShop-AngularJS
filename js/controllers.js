// 'use strict';
//
// var controllers = angular.module( 'controllers' , [ 'ngRoute' ] );
//
// // console.log(  );
//
// controllers.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ){
//
//     $http({
//         method: 'get',
//         url: 'model/produkty.json'
//     }).then(function (response) {
//         $scope.products = response.data;
//     },function (error){
//         console.log(error, 'can not get data.');
//     });
// }]);


// controllers.controller( 'product' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ){
//
//     $http({
//         method: 'get',
//         url: 'model/produkty.json'
//     }).then(function (response) {
//         $scope.products = response.data[$routeParams.id];
//     },function (error){
//         console.log(error, 'can not get data.');
//     });
//
// }]);

'use strict';

var controllers = angular.module( 'controllers' , [ 'ngRoute' ] );

// console.log(  );

controllers.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ){

    $http({
        method: 'get',
        url: 'model/produkty.json'
    }).then(function (response) {
        $scope.products = response.data;
    },function (error){
        console.log(error, 'can not get data.');
    });

}]);


controllers.controller( 'product' , [ '$scope' , '$http' , '$routeParams' , function( $scope , $http , $routeParams ){

    $http.get( 'model/produkty.json' ).
    success( function( data ){
        var products = data;
        $scope.product = products[$routeParams.id];
    }).error( function(){
        console.log( 'Błąd pobrania pliku json' );
    });

}]);