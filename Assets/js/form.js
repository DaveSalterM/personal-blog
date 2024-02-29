const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#blogtitle');
const postInput = document.querySelector('#postinput');
const postButton = document.querySelector('#postbtn');
const msgDiv = document.querySelector('#msg');
const userNameSpan = document.querySelector('#user-name');
const userBlogTitleSpan = document.querySelector('#blog-title');
const userPostInputSpan = document.querySelector('#post-input');


function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}



function redirect() {
    window.location.href = "blog.html";
    }
    

postButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = userNameInput.value;
  const blogtitle = blogTitleInput.value;
  const postinput = postInput.value;

  if (username === '') {
    displayMessage('error', 'Must enter user name');
  } else if (blogtitle === '') {
    displayMessage('error', 'Must enter title');
 } else if (postinput === '') {
    displayMessage('error', "Blog form can't be blank");

  } else {
   
    
    localStorage.setItem('username', JSON.stringify(username));
    localStorage.setItem('blogtitle', JSON.stringify (blogtitle));
    localStorage.setItem('postinput', JSON.stringify(postinput));
    console.log(localStorage)
    redirect();
  }
});

