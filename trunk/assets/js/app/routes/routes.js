//Routing
myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(false);
	
	$routeProvider
		.when('/', {
			templateUrl: 'partials/default.html',
			controller	: 'mainController'
		})
		.when('/sites', {
			templateUrl: 'partials/default.html',
			controller  : 'SiteListCtrl'
		})
		.when('/lines', {
			templateUrl: 'partials/line/list.html',
			controller  : 'LineListCtrl'
		})
		.when('/line/:lineId', {
			templateUrl : 'partials/line/detail.html',
			controller  : 'LineDetailCtrl'
		})
		.when('/menu3', {
			templateUrl: 'partials/default.html',
			controller  : 'menu3Controller'
		})
		.when('/help', {
			templateUrl: 'partials/default.html',
			controller  : 'helpController'
		})
		.otherwise({
			redirectTo: '/',
			controller	: 'mainController'
		});
}]);
