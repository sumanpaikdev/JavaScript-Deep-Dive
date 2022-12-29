function convertTempareture(celsius, decimal = 1) { //default parametre
    let farhenheit = celsius * 1.8 + 32;
    return Number(farhenheit.toFixed(decimal))
}
console.log(convertTempareture(21, 1))
console.log(convertTempareture(31)) // using dufault parametre



// Arrow Function 

// =>

const username = 'john';

const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`;  
 
function greetUser(name, callback) {
  return callback(capitalize(name));  
}

const result = greetUser(username, name => `Hi there, ${name}!`);

console.log(result);