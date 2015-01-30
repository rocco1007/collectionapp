'use strict';

App.controller('WishlistController', ['$scope', '$rootScope', 'collectionService', function WishlistController ($scope, $rootScope, collectionService) {
  $scope.title = "Wishlist";
  $scope.collection = collectionService;

  collectionService.getData().then(function() {
    // success
    
  }, function() {
    // error
  });

}]);