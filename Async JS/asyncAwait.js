// const response = fetch('https://jsonplaceholder.typicode.com/posts/1');
//   .then(response => response.json())
//   .then(data => console.log(data));
async function getPost() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
    const data = await response.json();
    console.log(data);
 }
 
 getPost();
 
 // async function getBlogPost() {
 //   const promise = new Promise((resolve, reject) => {
 //     setTimeout(() => resolve('blog post'), 1000);
 //   });
   
 //   const result = await promise;
 //   console.log(result);
 //   console.log('done');
 //     // .then(value => console.log(value))
 //     // .finally(() => console.log('done'));
 // }
 
 // getBlogPost()


 ////////////////////////////////////   catch error async await /////////////////////////////////
 // async function runAsync() {
//   return await Promise.reject(Error('Oops')); 
// }

// runAsync().catch(error => console.error(error));

async function getGithubUser() {
    try {    
      const response = await fetch('https://api.github.com/users/laksjdflasjfdlkjadfjk');
      if (!response.ok) {
        throw new Error(response.status);  
      }
    } catch (error) {
      console.log('Could not fetch user, try resetting your connection');
      console.error(error);  
    } 
  }
  getGithubUser();