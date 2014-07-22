

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

myApp.controller('LineDetailCtrl', function($scope, $routeParams, $filter, LinesFactory) {
	$scope.lines = LinesFactory.query();
	$scope.id = $routeParams.lineId;
	$scope.line = $filter('filter')($scope.lines, {id: 1})[0];
	
	 var foo =  [
	                         {
	                             "id": 1,
	                             "name": "Test"
	                         },
	                         {
	                             "id": 2,
	                             "name": "Beispiel"
	                         },
	                         {
	                             "id": 3,
	                             "name": "Sample"
	                         }
	                     ];

     $scope.single_object = $filter('filter')($scope.lines, {id: 1})[0];
	                     
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