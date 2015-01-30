'use strict';

App.controller('AddController', ['$scope', '$rootScope', 'collectionService', function AddController ($scope, $rootScope, collectionService) {
  $scope.title = "Add To Collection";
  $scope.book = {};

  $scope.book.inCollection = false;
  $scope.book.inWishlist = false;

  $scope.processForm = function() {
  	collectionService.postData($scope.book);
  }

}]);