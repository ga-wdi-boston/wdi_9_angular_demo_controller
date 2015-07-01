// Create an IIFE
// Remember IIFE help to prevent you from 
// creating global variables.

// And they allow one to create private variables
// in JS.
(function(ang){

  // PetsController Constructor Function
  function PetsController($scope){

    // property named 'pets' 
    $scope.pets = [
    {name: 'Rover', species: 'Dog', age: 7},
    {name: 'Milo', species: 'Horse', age: 8},
    {name: 'Mertle', species: 'Turtle', age: 123}
    ];

  // Number of Pets
  $scope.totalPets = function(){
    return $scope.pets.length;
  }
  
  // Return the oldest pet
  $scope.oldestPet = function(){
    // the oldest pet is the first pet
    var candidatePet = $scope.pets[0];

    $scope.pets.forEach(function(pet){

      if (pet.age > candidatePet.age) {
        // set the oldest pet
        candidatePet = pet;
      }
    });
    // return the oldest pet
    return candidatePet;
  };

  };
  
  // angular.module('petsApp') will retrieve the application's top-level module.
  // .controller is a angular method that allows one to include a Controller
  // in an angular module.
  ang.module('petsApp').controller('PetsController', PetsController);

})(angular);

// var angular = ...