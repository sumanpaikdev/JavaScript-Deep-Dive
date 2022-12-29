const response = "Reed";
const isEmailVerified = true;

// let username;

// if (response) {
//   if (isEmailVerified) {
//     username = response;
//   }  
// } else {
//   username = "guest";
// }

const username = isEmailVerified && response || "guest";
// const username = isEmailVerified && (response || "guest");  //for proiroty

console.log(username);