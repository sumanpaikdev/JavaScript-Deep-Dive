const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
  ];
  
  const uniqueDishes = [...new Set(customerDishes)];
  console.log(uniqueDishes)
  
  // const numbers = new Set([[1], [2], [3]]);
  
  // for (const num of numbers) {
  //   console.log(num);  
  // }