// callbacks -> promises

// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
// });

const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject); 
 });
 
 promise
   .then(position => console.log(position))
   .catch(error => console.error(error))
   .finally(() => console.log('done'));
 
 // States of a promise:
 // pending
 // fulfilled
 // rejected
 
 // const promise = new Promise((resolve, reject) => {
 //   setTimeout(() => reject(Error('Promise failed.')), 1000);  
 // });
 
 // promise
 //   .then(value => console.log(value))
 //   .catch(error => console.error(error))
 //   .finally(() => console.log('done'));