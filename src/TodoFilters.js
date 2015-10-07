angular.module("TodoApp").controller("TodoFilters", TodoFilters);

TodoFilters.$inject = ['$scope', '$rootScope' ];

function TodoFilters($scope, $rootScope) {

	var filterQuery = { name: '', completed: '' };
	
	function isCompletedFilter(value) {
		return filterQuery.completed === value;
	}
	
	function setCompletedFilter(value) {
		filterQuery.completed = value;
		$rootScope.filterQuery = filterQuery;
	}

	$scope.filterQuery = filterQuery;
	$scope.isCompletedFilter = isCompletedFilter;
	$scope.setCompletedFilter = setCompletedFilter;
}