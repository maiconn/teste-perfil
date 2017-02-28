angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('index');

$stateProvider

.state('index',{
	url : '/index',
	templateUrl : 'templates/index.html',
	controller: 'IndexController'
});

});