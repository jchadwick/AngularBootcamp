angular.module("TodoApp").controller("AddTodo", AddTodo);

AddTodo.$inject = ['$scope', '$rootScope', '$log' ];

function AddTodo($scope, $rootScope, $log) {

	function add(newTask, form) {

		if (form) {
			if (!form.$dirty) {
				$log.warn('Form is not dirty')
				return false;
			}
			if (!form.$valid) {
				$log.warn('Form is not valid')
				return false;
			}
		}

		$scope.todos.push({ name: newTask.name, completed: false });

		newTask.name = '';

		if (form) {
			form.$setPristine();
		}
	}

	$scope.add = add;
	$scope.todos = $rootScope.todos;
}