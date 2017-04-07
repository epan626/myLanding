var app = angular.module('app', ['ngRoute', 'ngCookies'])
app.config(['$locationProvider', function($locationProvider){
$locationProvider.hashPrefix('')
$locationProvider.html5Mode(true)
}])
app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
    })
});
