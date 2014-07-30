

//Main controller
myApp.controller('mainController', function($scope, localStorageService) {

	$scope.title	= 'Homepage';
	$scope.message	= 'home';
	
    localStorageService.clearAll();
    localStorageService.set('line.1','{ "id":1,"name": "Au del&agrave; de la verticale", "description": "Voie d\'un superbe niveau dans le 7C", "images": ["1.jpg", "2.jpg"], "site": "1"}');
    localStorageService.set('line.2','{ "id":2,"name": "Plus c\'est long, plus c\'est bon !", "site": "2"}');
    localStorageService.set('line.2','{ "id":2,"name": "Plus c\'est long, plus c\'est bon !", "site": "2"}');
    localStorageService.set('site.1','{ "id":1,"name": "Taghia"}');
    localStorageService.set('site.2','{ "id":2,"name": "Pont de Barret"}');
});

myApp.controller('SiteListCtrl', function($scope, $location, localStorageService) {

	$scope.title	= 'Sites';
	$scope.message	= 'page 1';
	
	$scope.sites = [];
	//This should be factorize in local storage?
	hasNext = true;
	i = 1;
	while(hasNext){
		$scope.sites[i-1] = localStorageService.get('site.' + i);
		i++;
		if(localStorageService.get('site.' + i) === null) {
			hasNext = false;
		}
	}
	
	
	$scope.detail = function(siteId) {
		$location.path('/site/' + siteId);
	};
});

myApp.controller('SiteDetailCtrl', function($scope, $routeParams, $location, localStorageService) {
	id = $routeParams.siteId;
	$scope.site = localStorageService.get('site.'+ id);
	
	/* Get child line */
	$scope.lines = [];         
	hasNext = true;
	i = 1;
	while(hasNext){
		line = localStorageService.get('line.' + i);
		
		if( line.site === id ){
			$scope.lines.push(line);
		}
		
		i++;
		if(localStorageService.get('line.' + i) === null) {
			hasNext = false;
		}
	}
	
	$scope.map = {
		    center: {
		        latitude: 45,
		        longitude: -73
		    },
		    zoom: 8
		};
});

myApp.controller('LineListCtrl', function($scope, $location, localStorageService) {
	$scope.title	= 'Lines';
	$scope.message	= 'Lines List';
	
	$scope.lines = [];
	hasNext = true;
	i = 1;
	while(hasNext){
		$scope.lines[i-1] = localStorageService.get('line.' + i);
		i++;
		if(localStorageService.get('line.' + i) === null) {
			hasNext = false;
		}
	}
	
	$scope.detail = function(lineId) {
		$location.path('/line/' + lineId);
	};
});

myApp.controller('LineDetailCtrl', function($scope, $routeParams, $location, localStorageService) {
	id = $routeParams.lineId;
	$scope.line = localStorageService.get('line.'+ id);
	                     
});

myApp.controller('menu3Controller', function($scope, $rootScope) {
	$scope.title	= 'Menu 3';
	$scope.message	= 'page 3';
	
});

myApp.controller('helpController', function($scope, $rootScope) {
	$scope.title	= 'Help';
	$scope.message	= 'Help page';
	
});