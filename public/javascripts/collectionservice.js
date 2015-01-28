'use strict';

App.factory('collectionService', ['$http', function($http) {
	var o = {
		collection : [
			{
				title: "Amazing Spider-Man 1",
				price: 2.99
			}
		]
	};

	function add(data) {
		o.collection.push(data);
		console.log("Added");
		console.log(o);
	}

	return {
		data: o,
		add: add
	};
}]);