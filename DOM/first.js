// const el = document.getElementById('home')
// console.log(el)

// const links = document.querySelectorAll('a');
// // console.log(link);

// links.forEach(link => {
//   if (link.matches('a[href="/login"]')) {
//     const loginLink = link;
//     console.log(loginLink);  
//   }
// })

// const divs = document.getElementsByTagName('div')
// console.log(divs);


const newPost = document.createElement('div');
newPost.className = 'top-post';
newPost.innerHTML = "<strong>This is a new post</strong>"

// document.body.prepend(newPost);
const post = document.querySelector('.post');

post.prepend(newPost);