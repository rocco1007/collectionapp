'use strict';

App.controller('CollectionController', ['$scope', '$rootScope', 'collectionService', function HomeController ($scope, $rootScope, collectionService) {
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

  $scope.processForm = function() {
    console.log($scope.info);
    collectionService.postData($scope.info);
  }

}]);