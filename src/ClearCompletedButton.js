angular.module("TodoApp").controller("ClearCompletedButton", ClearCompletedButton);

ClearCompletedButton.$inject = ['$scope', 'TodosService'];

function ClearCompletedButton($scope, TodosService) {

	$scope.clearCompleted = TodosService.clearCompleted;

}
