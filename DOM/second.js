// Challenge: 
// 1. Update text in the Scrimba mini-browser to match the title of this cast
// 2. Create an h2 with class 'tagline' and text "I can create HTML elements!"
// Add it right under the modified text.

const title = document.querySelector('h1');
title.innerHTML = "Creating and modifying HTML elements";

const tagline = document.createElement('h2');
tagline.className = 'tagline';
tagline.innerHTML = 'I can create HTML elements!';

title.append(tagline);


const post = document.querySelector(".post");
// post.style.margin = '30px';
post.classList.remove('post'); //Remove class
post.classList.add('post'); // add a class


// EVENT LISTENER IN JAVASCRIPT HTML 
// const posts = document.querySelectorAll(".post");
// posts.forEach(post => {  
//   post.addEventListener('click', event => {
//   //   console.log(event.target);  
//     console.log('Do you want to edit this post?')
//   });
// });

document.body.addEventListener('click', event => {
    //   if (!event.target.closest('.post')) return;
      
      console.log('Do you want to edit this post?')  
    })