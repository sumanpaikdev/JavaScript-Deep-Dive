// let and const - block scoped

var price = 30;
var offer = true;

//variable shadowing
if(offer){
    var price = 30 + 30;  
    console.log(price) // 60
}

console.log(price) // 60  <---

// var does not have block level scope whereas let have block level scope. 
// so we should use let instead of var

let price = 30;
let offer = true;

if(offer){
    let price = 30 + 30;
    console.log(price) // 60
}

console.log(price) // 30 <---
