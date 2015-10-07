angular.module("TodoApp", [])

	.run(function ($rootScope, $log, $window, $timeout) {

		$log.debug('Application initializing...');

		var todos = [
			{ name: 'Clean cave', completed: false },
			{ name: 'Dryclean cape', completed: true },
			{ name: 'Save Gotham', completed: false },
		];

		$rootScope.todos = todos;

		$log.info('Application initialized');
	})