'use strict';

var App = angular.module('App', ['ngResource', 'ngRoute']);

App.config(function($routeProvider) {
	var viewsPath = 'partials/';

	//Making routing objects
	var collection = {
		templateUrl: viewsPath + 'collection/collection.html',
		controller: 'CollectionController',
		activeTab: 'collection',
		title: 'My Collection'
	};

	//Defining routes
	$routeProvider
		.when("/", collection)
		.when("/collection", collection);
});

App.run(function($rootScope, $route) {
	$rootScope.page_title = 'My Collection';
	$rootScope.activeTab = "Collection";
	$rootScope.$on('$routeChangeSuccess', function() {
	  $rootScope.page_title = "My Comic Book Collection - " + $route.current.title;
	  $rootScope.activeTab = $route.current.activeTab;
	});
});