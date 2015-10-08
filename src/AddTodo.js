angular.module("TodoApp").controller("AddTodo", AddTodo);

AddTodo.$inject = ['$scope', '$log', 'TodosService'];

function AddTodo($scope, $log, TodosService) {

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

		TodosService.add(newTask.name);

		newTask.name = '';

		if (form) {
			form.$setPristine();
		}
	}

	$scope.add = add;
}