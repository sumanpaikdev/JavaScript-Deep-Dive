const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  const [first, second] = finalMenuItems;
  
  // let first = finalMenuItems[0];
  // let second = finalMenuItems[1];
  // let third = finalMenuItems[2];
  
  // console.log(first, second, third);
  console.log({ first },{ second });
 output --> { first: 'American Cheeseburger' } { second: 'Southern Fried Chicken' }

//  swap the values 
let [first, second] = finalMenuItems;

[second, first] = [first, second];

// rest operaro 
const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  const [winner, ...losers] = finalMenuItems;
  
  console.log({ winner, losers });


//   challenge spread operator
const fishDishes = ['Salmon Rillettes', 'Grilled Tuna Provencal', 'Fish and Chips']
const meatDishes = ['Lasagna', 'Spaghetti', 'Satay Chicken Skewers']

// Modify these four variables first
let [chefsFishDishes, ...regularFishDishes] = fishDishes;

let [regularMeatDishes, ...chefsMeatDishes] = meatDishes;
console.log(chefsFishDishes)
console.log(chefsMeatDishes)
console.log(regularFishDishes)
console.log(regularMeatDishes )

// Finally, use the spread operator to create these two arrays as well
let chefsDishes = [chefsFishDishes, ...chefsMeatDishes];
let regularDishes = [regularMeatDishes, ...regularFishDishes];
console.log(chefsDishes)
console.log(regularDishes)
