// Challenge: 
// 1. Select h1 and add a click event listener. 
// Log the text from the element to the console.

// If you're not sure how to get text, feel free to check out hint.js

// 2. Add the same functionality to all the elements displayed
// in Scrimba web browser. Finally, try to trigger the event when you
// hover the mouse over the elements, instead of when clicking on them
  
const title = document.querySelector('h1');
title.addEventListener('click', event => {
  console.log(event.target.textContent);
});

document.body.addEventListener('mouseover', event => {  //mouseover, click
  console.log(event.target.textContent);
});