angular.module('TodoApp').service('PubSub', PubSub);

PubSub.$inject = [ '$rootScope' ];

function PubSub($rootScope) {
	
	var handlers = {};
	
	function publish(name, args) {
		var subscribers = handlers[name];
		
		if(subscribers) {
			subscribers.forEach(function(subscriber) {
				subscriber({}, args);
			})
		}
	} 
	
	function subscribe(name, handler) {
		var subscribers = handlers[name];
		
		if(!subscribers) {
			subscribers = handlers[name] = [];
		}
		
		subscribers.push(handler);
	}
	
	return {
		publish: publish,
		subscribe: subscribe
	}
	
}