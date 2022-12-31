const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    verified: true 
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
  const createdUser = { ...user, ...newUser, verified: false };
  console.log(createdUser);
  // console.log(Object.assign({}, user, newUser, { verified: false }));
  