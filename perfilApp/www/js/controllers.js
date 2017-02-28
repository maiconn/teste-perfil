angular.module('starter')
.controller('IndexController', function($scope){
    $scope.gender = {};
    $scope.dias = function(){
        var x = [];

        for(var i = 1 ; i <= 31 ; i++){
            x.push(i);
        }
        return x;
    }

    $scope.meses = ['Janeiro', 
                    'Fevereiro',
                    'Março',
                    'Abril',
                    'Maio',
                    'Junho',
                    'Julho',
                    'Agosto',
                    'Setembro',
                    'Outubro',
                    'Novembro',
                    'Dezembro'];

    $scope.anos = function(){
        var x = [];

        for(var i = 1900 ; i <= 2017 ; i++){
            x.push(i);
        }
        return x;
    }
});