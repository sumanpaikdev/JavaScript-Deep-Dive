// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];
  const totalWeight = cars.reduce((accumulator, car) => {
      return accumulator + car.weight;
  }, 0)
  console.log(totalWeight)
  
  const electricTotalWeight = cars.reduce((accumulator, car) => {
      if(car.isElectric){
          return accumulator + car.weight
      }else{
          return accumulator
      }
  }, 0)
  console.log(electricTotalWeight)


  /**************************************** */

  const numbers = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numbers.reduce((acc, num) => {
  acc.push(num * 2);
  return acc;
}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numbers);

  /**************************************** */

const numbers = [1, 2, 3, 4, 5, 6];

// const doubledNumbers = numbers.reduce((acc, num) => {
//   acc.push(num * 2);
//   return acc;
// }, []);
// console.log('doubled numbers', doubledNumbers);
// console.log('numbers', numbers);

const greaterNumbers = numbers.reduce((acc, num) => num > 3 ? acc.concat(num) : acc, []);
console.log(greaterNumbers);