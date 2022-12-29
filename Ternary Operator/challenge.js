// Challenge 1: Check if the user is allowed to add an "iPad" to its shopping cart. Write a ternary that sets the shoppingCart variable to "iPad" if the user is authenticated, and an empty string if the user isn't authenticated

const isAuthenticated = true;
let shoppingCart;

// write your code here
shoppingCart = isAuthenticated ? "ipad" : "";

console.log("shoppingCart: ", shoppingCart);


// Challenge 2: Check if user is old enough. Write a ternary that sets allowedAccess to true if the age is 18 or more, or false if not
const age = 19;
let allowedAccess;
allowedAccess = age >= 18 ? true : false;
// write your code here


console.log("allowedAccess: ", allowedAccess);

