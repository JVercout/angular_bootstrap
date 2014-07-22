

//Main controller
myApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.title	= 'Homepage';
	$scope.message	= 'home';
	
});

myApp.controller('SiteListCtrl', function($scope, $rootScope) {
	// create a message to display in our view
	$scope.title	= 'Sites';
	$scope.message	= 'page 1';
	
});

myApp.controller('LineListCtrl', function($scope, $location, LinesFactory) {
	// create a message to display in our view
	$scope.title	= 'Lines';
	$scope.message	= 'page 2';
	
	$scope.lines = LinesFactory.query();
	
	$scope.detail = function(userId) {
		$location.path('/line/' + userId);
	};
	
});

myApp.controller('LineDetailCtrl', function($scope, $routeParams, LinesFactory) {
	$scope.user = LinesFactory.get({ id : $routeParams.lineId });
});

myApp.controller('menu3Controller', function($scope, $rootScope) {
	// create a message to display in our view
	$scope.title	= 'Menu 3';
	$scope.message	= 'page 3';
	
});

myApp.controller('helpController', function($scope, $rootScope) {
	// create a message to display in our view
	$scope.title	= 'Help';
	$scope.message	= 'Help page';
	
});