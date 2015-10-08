angular.module("TodoApp").controller("TodoList", TodoList);

TodoList.$inject = ['$scope', 'TodosService' ];

function TodoList($scope, TodosService) {

	$scope.todos = [];
	$scope.toggleCompleted = TodosService.toggleCompleted;
	$scope.remove = TodosService.remove;
	
	TodosService.getAll().then(function(todos) {
		angular.copy(todos, $scope.todos);
	});
}