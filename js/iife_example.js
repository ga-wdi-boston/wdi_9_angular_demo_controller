// What javascript scope is this function
// defined in???

// Yep, in the global scope.

// Polluting the Global Namespace.
// If we had a js library that ALSO had a 
// variable or function of this name, "say", 
// it would cause a naming conflict.

// var myApp = function(){
//   function say(){
//     alert("Say Hello");
//   }
// };

// myApp.say();

// IIFE
// (alert("hey you there"))()

// Defined an anonymous function that is immediately invoked.
( function IIFEBlah(){
  // Everthing inside this anonymous function is hidden from the global
  // javascript scope.
  var sayHi = function(){
    alert("Here we are again");    
  }
  sayHi();
  })()
