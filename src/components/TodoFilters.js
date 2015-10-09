angular.module("TodoApp")
	.directive('todoFilters', function () {

		return {
			scope: {},
			templateUrl: 'components/TodoFilters.html',
			controller: TodoFilters
		};

	})

TodoFilters.$inject = ['$scope', 'PubSub', 'TodosService'];

function TodoFilters($scope, PubSub, TodosService) {

	$scope.filterQuery = { name: '', completed: '' };
	$scope.isCompletedFilter = isCompletedFilter;
	$scope.setCompletedFilter = setCompletedFilter;

	$scope.$watch('filterQuery', _raiseChanged, true)

	PubSub.subscribe('TodosChanged', function () {
		TodosService.getAll().then(function (todos) {
			$scope.totalTodoCount = todos.length;
			$scope.completedTodoCount = _findCompletedCount(todos, true);
			$scope.incompleteTodoCount = _findCompletedCount(todos, false);
		})
	})

	function isCompletedFilter(value) {
		return $scope.filterQuery.completed === value;
	}

	function setCompletedFilter(value) {
		$scope.filterQuery.completed = value;
	}

	function _findCompletedCount(todos, isCompleted) {
		var filtered = todos.filter(function (x) { return x.completed == isCompleted; });
		return filtered.length;
	}

	function _raiseChanged() {
		PubSub.publish('TodoFilterChanged', $scope.filterQuery);
	}
}