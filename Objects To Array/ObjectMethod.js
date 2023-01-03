// for-in loop
// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//   console.log('value', obj[key]);
// }

// Object.keys(), Object.values(), Object.entries()
// const user = {
//   name: 'John',
//   age: 29  
// };

// console.log(Object.entries(user));

const users = {
    '2345234': {
      name: "John",
      age: 29
    },
    '8798129': {
      name: "Jane",
      age: 42
    },
    '1092384': {
      name: "Fred",
      age: 17 
    }
  };
  
  const usersOver20 = Object.entries(users).reduce((acc, [id, user]) => {
    if (user.age > 20) {
      acc.push({ ...user, id });
    }  
    return acc;
  }, []);
  console.log(usersOver20);
  
  // const values = Object.keys(user).map(key => user[key]);
  // console.log(values);
  // console.log(Object.values(user));
  
  // const monthlyExpenses = {
  //   food: 400,
  //   rent: 1700,
  //   insurance: 550,
  //   internet: 49,
  //   phone: 95  
  // };
  
  // const monthlyTotal = Object.values(monthlyExpenses).reduce((acc, expense) => acc + expense, 0);
  // console.log(monthlyTotal);