// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(num, step) {
    // write your code here
    let number = num;
    return function downcount() {
      return number -= step
    }
  }
  
  const countingDown = countdown( 10, 1);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  