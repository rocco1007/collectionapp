'use strict';

App.factory('collectionService', ['$http', '$q', function($http, $q) {
	var o = {
		collection : [

		]
	};
	var deferred = $q.defer();

	function add(data) {
		o.collection.push(data);
		console.log("Added");
		console.log(o);
	}

	function postData(pData) {
		// Simple POST request example (passing data) :
		$http.post('/api/books', pData).
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		    o.collection.push(pData);
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    console.log("error");
		  });
	}

	function getData() {
		// Simple POST request example (passing data) :
		// Simple GET request example :
		$http.get('/api/books').
		  then(function(data) {
		    // this callback will be called asynchronously
		    // when the response is availableo
		    angular.copy(data.data, o.collection);
		    console.log(data);
		    deferred.resolve();
		  }, function() {
		  	deferred.reject();
		  });

		  return deferred.promise;
	}

	return {
		data: o.collection,
		add: add,
		postData: postData,
		getData: getData
	};
}]);