angular.module("TodoApp")
	.directive('clearCompleted', ['TodosService', function (TodosService) {
		
		return {
			restrict: 'A',
			link: function(scope, element, attrs, controller) {
				element.on('click', TodosService.clearCompleted)
			}
		}
		
	}])