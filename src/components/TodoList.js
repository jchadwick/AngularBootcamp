angular.module("TodoApp")
	.controller('TodoList', TodoList)
	.directive('todoList', function () {

		return {
			scope: {
				filterQuery: '=filter'
			},
			templateUrl: 'components/TodoList.html',
			controller: TodoList
		};

	})

TodoList.$inject = ['$scope', 'TodosService', 'PubSub'];

function TodoList($scope, TodosService, PubSub) {

	$scope.todos = [];
	$scope.toggleCompleted = TodosService.toggleCompleted;
	$scope.remove = TodosService.remove;

	PubSub.subscribe('TodosChanged', refreshTodos)
	
	PubSub.subscribe('TodoFilterChanged', function(event, filter) {
		$scope.filterQuery = filter;
	})

	refreshTodos();


	function refreshTodos() {
		TodosService.getAll().then(function (todos) {
			angular.copy(todos, $scope.todos);
		});
	}

}