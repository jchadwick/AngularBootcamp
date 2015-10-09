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

TodoList.$inject = ['$scope', 'TodosService'];

function TodoList($scope, TodosService) {

	$scope.todos = [];
	$scope.toggleCompleted = TodosService.toggleCompleted;
	$scope.remove = TodosService.remove;

	$scope.$on('TodoAdded', function (event, args) {
		TodosService.get(args.todoId)
			.then(function (todo) {
				$scope.todos.push(todo);
			})
	})

	$scope.$on('TodoRemoved', function (event, args) {
		var removed = $scope.todos.filter(function (x) { return x.id == args.todoId; });

		if (removed.length) {
			$scope.todos.splice($scope.todos.indexOf(removed), 1);
		}
	})

	$scope.$on('TodosChanged', refreshTodos)
	
	$scope.$on('TodoFilterChanged', function(event, filter) {
		$scope.filterQuery = filter;
	})

	refreshTodos();


	function refreshTodos() {
		TodosService.getAll().then(function (todos) {
			angular.copy(todos, $scope.todos);
		});
	}

}