
myApp.factory('LinesFactory', function($resource) {
	return $resource('datas/lines.json', {}, {
		query: { method: 'GET', isArray:true }
	});
});
