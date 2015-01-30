'use strict';

App.controller('CollectionController', ['$scope', '$rootScope', 'collectionService', function CollectionController ($scope, $rootScope, collectionService) {
  $scope.title = "My Collection";
    $scope.collection = collectionService;

  collectionService.getData().then(function() {
    // success
    
  }, function() {
    // error
  });

  $scope.add = function() {
    collectionService.postData({
      title: "Testing Click Event",
      price: 9.99
    });
  }

}]);