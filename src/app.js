angular.module("TodoApp", [])
	.run(function($rootScope) {
	
		$rootScope.filterQuery = { name: '', completed: '' };
		
	})