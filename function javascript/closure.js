// whta is Closure and why it matters? 

// function handleLikePost(step) {
//     let likeCount = 0;
//     return function addLike() {
//       likeCount += step;    
//       return likeCount;
//     }
//   //   addLike();
//     console.log('like count:', likeCount);
//   }
  
//   const doubleLike = handleLikePost(2);
  
//   console.log(doubleLike());
//   console.log(doubleLike());
//   console.log(doubleLike());
  
  // 1) Closures are a property of JavaScript functions
  // 2) Call function in different scope than where function was original defined

// ******************************************************************************************************* //

// PRACTICE:  

// create a function that is used to increment a number 

// STEP 1: does not work 

// let count = 0;
// function increment() {
//     return count+1
// }
// console.log(increment())
// console.log(increment())
// console.log(increment())


// STEP 2: still it does not work because it can not remember the updated count

// function increment() {
//     let count = 0;
//     return count = count+1
// }
// console.log(increment())
// console.log(increment())
// console.log(increment())


// STEP 3: still it does not work because it can not remember the updated count

// function increment() {
//     let count = 0;
//     return count = count+1
// }
// console.log(increment())
// console.log(increment())
// console.log(increment())


// STEP 4: 

function increment() {
    let count = 0;
   return function updateIncrement() {
        return count = count+1
    }
}
console.log(increment())
const addCount = increment()
console.log(addCount()) // 1
console.log(addCount()) // 2
// console.log(addCount())