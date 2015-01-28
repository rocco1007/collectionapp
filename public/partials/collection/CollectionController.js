'use strict';

App.controller('CollectionController', ['$scope', '$rootScope', 'collectionService', function HomeController ($scope, $rootScope, collectionService) {
  $scope.title = "My Collection";
  $scope.collection = collectionService.data.collection;

  $scope.add = function() {
    collectionService.add({
      title: "Amazing Spider-Man #2",
      price: 3.99
    });
  }

}]);