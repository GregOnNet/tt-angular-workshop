// IIFE immediately-invoked function expression
(function() {
  'use strict';

  function addiere(a) {  // Scope A
    return function(b) { // Scope B
      return a + b;
    };
  }

  var addiere10 = addiere(10);
  var addiere30 = addiere(30);

  var ergebnis = addiere30(
                  addiere10(
                   addiere10(5)));

  console.log(ergebnis);
})();
