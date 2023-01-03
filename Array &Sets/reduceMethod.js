const menuItems = [
    { item: "Blue Cheese Salad", price: 8 },
    { item: "Spicy Chicken Rigatoni", price: 18 },
    { item: "Ponzu Glazed Salmon", price: 23 },
    { item: "Philly Cheese Steak", price: 13 },
    { item: "Baked Italian Chicken Sub", price: 12 },
    { item: "Pan Seared Ribeye", price: 31 }
  ];
// add all the price and give the total 
// .reduce method iterate through the all item and add the prices
const totalPrice =  menuItems.reduce((accumulator, menuItem) => {
    return accumulator + menuItem.price;  
  }, 0)

  console.log(totalPrice)  // 105 total