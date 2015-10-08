angular.module("TodoApp")
	.directive('todoFilters', function () {

		return {
			scope: {
				filterQuery: '=filter'
			},
			templateUrl: 'components/TodoFilters.html',
			controller: TodoFilters
		};

	})

TodoFilters.$inject = ['$scope'];

function TodoFilters($scope) {

	function isCompletedFilter(value) {
		return $scope.filterQuery.completed === value;
	}

	function setCompletedFilter(value) {
		$scope.filterQuery.completed = value;
	}

	$scope.isCompletedFilter = isCompletedFilter;
	$scope.setCompletedFilter = setCompletedFilter;
}