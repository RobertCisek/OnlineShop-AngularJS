'use strict';

var app = angular.module( 'app' , [] );

app.controller( 'products' , [ '$scope' , '$http' , function( $scope , $http ){

    $http({
        method: 'get',
        url: 'model/produkty.json'
    }).then(function (response) {
        $scope.products = response.data;
    },function (error){
        console.log(error, 'can not get data.');
    });

}]);
