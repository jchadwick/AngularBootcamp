angular.module("TodoApp", ['ngAnimate'])

	.run(function ($rootScope, $log, $window, $timeout) {

		$log.debug('Application initializing...');

		var todos = [
			{ name: 'Clean cave', completed: false },
			{ name: 'Dryclean cape', completed: true },
			{ name: 'Save Gotham', completed: false },
		];

		var filterQuery = { name: '', completed: '' };

		function add(newTask, form) {

			if(form) {
				if(!form.$dirty) {
					$log.warn('Form is not dirty')
					return false;
				}	
				if(!form.$valid) {
					$log.warn('Form is not valid')
					return false;
				}	
			}

			todos.push({ name: newTask.name, completed: false });
			
			newTask.name = '';
			
			if(form) {
				form.$setPristine();
			}
		}

		function remove(todo) {
			todos.splice(todos.indexOf(todo), 1);
		}

		function clearCompleted() {
			var completed = todos.filter(function (x) { return x.completed; })

			for (var i = 0; i < completed.length; i++) {
				remove(completed[i]);
			}
		}

		$rootScope.add = add;
		$rootScope.clearCompleted = clearCompleted;
		$rootScope.filterQuery = filterQuery;
		$rootScope.remove = remove;
		$rootScope.todos = todos;

		$log.info('Application initialized');
	})