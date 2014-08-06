// Javascript Construction function
// Remember that the Constructor function is used
// by the new keyword when creating a Javascript Object.
// new SongsController({...})

// Angular injects the $scope into this Controller when it gets
// created by Angular
function SongsController($scope){

  // Define songs in the ViewModel, $scope
  $scope.songs = [
      {title: 'Mirrors', artist: 'Justin Timberlake', duration: 300, releaseDate: '2014-07-12', price: 1.5678},
      {title: 'All or Nothing', artist: 'O-town', duration: 240, releaseDate: '2001-11-12', price: 0.99},
      {title: 'Whats Going On', artist: 'Marvin Gaye', duration: 190, releaseDate: '1974-05-12', price: 1.99},
      {title: 'Raspberry Beret', artist: 'Prince', duration: 304, releaseDate: '1987-08-11', price: 1.20},
      {title: 'Dancing On My Own', artist: 'Robyn', duration: 255, releaseDate: '2010-01-18', price: 2.04}
      ];

  $scope.doSort = function(propName){
    $scope.sortBy = propName; 
    $scope.reverse = !$scope.reverse;    
  };

};