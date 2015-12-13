// creates an angular module called myModule.
// modules can use other modules. The array allows the 
// ability to pass dependencies to other modules.
// With the second array parameter there, the function 
// is a setter function. Omitting, the array then it 
// acts as a getting function.

// var myModule = angular.module('myAngularApplication', []);

// we'd like the code to execute as soon as the file is loaded.
// Using a global variable like above isn't a good idea. This can 
// be fixed with using Immediately Invoked Function Expressions (IIFE).

(function() {
  myModule = angular.module('myAngularApplication', []);
}());

// Without a global variable, a getter function would have to be used 
// to associate a controller with a module. 