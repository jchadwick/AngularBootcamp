angular.module('TodoApp').service('TodosService', TodosService);

TodosService.$inject = ['$http', 'PubSub', '$q'];

function TodosService($http, PubSub, $q) {

	var baseUrl = 'https://jchad-todo.azurewebsites.net/todos';

	var todos = null;

	function add(todo) {
		return $http.post(baseUrl, { name: todo })
			.then(_unwrap)
			.then(function (newTodo) {
				if (todos) {
					todos.push(newTodo);
				} else {
					getAll();
				}

				_raiseChanged();

				return newTodo;
			});
	}

	function clearCompleted() {
		return $http.post([baseUrl, 'clear'].join('/'))
			.then(_loadTodos);
	}

	function getAll() {
		if (todos)
			return $q.all(todos);
			
		return _loadTodos();
	}

	function _loadTodos() {
		return $http.get(baseUrl)
			.then(_unwrap)
			.then(function (updated) {
				todos = updated;
				_raiseChanged();
				return updated;
			});
	}

	function get(todoId) {

		if (!todos) {
			return getAll().then(function () { return _find(todoId); })
		} else {
			return $q.all(_find(todoId));
		}
	}

	function remove(todo) {
		return $http.delete([baseUrl, todo.id].join('/'))
			.then(_unwrap)
			.then(function () {
				var removed = _find(todo.id);
				todos.splice(todos.indexOf(removed), 1);
				_raiseChanged();
			});
	}

	function toggleCompleted(todoId, completed) {
		var stateChange = completed ? 'complete' : 'uncomplete';
		return $http.post([baseUrl, todoId, stateChange].join('/'))
			.then(_unwrap)
			.then(function () {
				var todo = _find(todoId);
				todo.completed = completed;
				_raiseChanged();
			});
	}

	function _raiseChanged() {
		PubSub.publish('TodosChanged');
	}

	function _find(todoId) {
		var filtered = todos.filter(function (x) { return x.id == todoId; });
		return filtered.length ? filtered[0] : null;
	}

	function _unwrap(resp) {
		return (resp && resp.status < 400) ? resp.data : null;
	}

	return {
		add: add,
		clearCompleted: clearCompleted,
		get: get,
		getAll: getAll,
		remove: remove,
		toggleCompleted: toggleCompleted
	};

}
