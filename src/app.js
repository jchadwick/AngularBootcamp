angular.module("TodoApp", ['ngRoute'])
	.config(function ($routeProvider) {

		$routeProvider
			.when('/view', {
				templateUrl: 'pages/view.html',
				controller: 'TodoList'
			})
			.when('/edit', {
				templateUrl: 'pages/edit.html',
			})
			.when('/details/:todoId', {
				templateUrl: 'pages/details.html',
				controller: ['$routeParams', 'TodosService', function ($routeParams, TodosService) {
					var todo = this.todo = {};

					TodosService.get($routeParams.todoId).then(function (remote) {
						angular.merge(todo, remote);
					});
				}],
				controllerAs: 'vm'
			})
			.otherwise('/view')

	})
	.run(function (PubSub, $log) {

		logEvent('TodoFilterChanged');
		logEvent('TodoAdded');
		logEvent('TodosChanged');
		logEvent('TodoRemoved');
		
		function logEvent(eventName) {
			PubSub.subscribe(eventName, function (event, args) {
				$log.debug('['+eventName+': ', args, ']');
			});
		}

	})