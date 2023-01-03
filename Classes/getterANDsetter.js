class Product {
    constructor(name, price, discountable) {
      this.name = name;
      this._price = price;
      this.discountable = discountable;
    }
  
    get price() {
      return this._price;
    }
    
    set price(price) {
      if (typeof price !== "number") {
        return this._price;
      } else {
        this._price = price; 
      }
    }
  }
  
  const product1 = new Product("Coffee Maker", 99.95, false);
  product1.price = 30;
  console.log(product1.price);
  // product1.price = {};
  // console.log(product1.clearancePrice);
  // product1.price = {};
  // console.log(product1.newPrice);