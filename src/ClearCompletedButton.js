angular.module("TodoApp").controller("ClearCompletedButton", ClearCompletedButton);

ClearCompletedButton.$inject = ['$scope', '$rootScope'];

function ClearCompletedButton($scope, $rootScope) {

	function clearCompleted() {
		var completed = $scope.todos.filter(function (x) { return x.completed; })

		for (var i = 0; i < completed.length; i++) {
			remove(completed[i]);
		}
	}

	function remove(todo) {
		$scope.todos.splice($scope.todos.indexOf(todo), 1);
	}

	$scope.todos = $rootScope.todos;
	$scope.clearCompleted = clearCompleted;
}
