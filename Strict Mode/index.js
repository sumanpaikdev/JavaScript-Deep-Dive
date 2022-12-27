// "use strict";

// hoisting
var title; //scope
console.log(title) // null
title = 21;
console.log(title)


message = "suman"
console.log(message)  // this shows error message

// browser - window object
// server - global object


// javascript running mode 
// 1. sloppy "normal" mode - default in script
// 2. strict mode - throws more error, prevent pitfalls of the language 