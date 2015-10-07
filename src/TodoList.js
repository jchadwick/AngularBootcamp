angular.module("TodoApp").controller("TodoList", TodoList);

TodoList.$inject = ['$scope', '$rootScope' ];
function TodoList($scope, $rootScope) {

	function remove(todo) {
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
	}

	$scope.todos = $rootScope.todos;
	$scope.remove = remove;
}