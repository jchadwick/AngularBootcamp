angular.module('TodoApp').service('TodosService', TodosService);

TodosService.$inject = ['$http'];

function TodosService($http) {
	
	var baseUrl = 'https://jchad-todo.azurewebsites.net/todos';
	
	function add(todo) {
		return $http.post(baseUrl, { name: todo }).then(_unwrap);
	}
	
	function clearCompleted() {
		return $http.post([baseUrl, 'clear'].join('/')).then(_unwrap);
	}
	
	function getAll() {
		return $http.get(baseUrl).then(_unwrap);
	}

	function remove(todo) {
		return $http.delete([baseUrl, todo.id].join('/')).then(_unwrap);
	}
	
	function toggleCompleted(todoId, completed) {
		var stateChange = completed ? 'complete' : 'uncomplete';
		return $http.post([baseUrl, todoId, stateChange].join('/')).then(_unwrap);
	}

	function _unwrap(resp) {
		return (resp && resp.status == 200) ? resp.data : null;
	}
	
	return {
		add: add,
		clearCompleted: clearCompleted,
		getAll: getAll,
		remove: remove,
		toggleCompleted: toggleCompleted
	};
	
}
