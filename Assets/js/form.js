const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#blogtitle');
const postInput = document.querySelector('#postinput');
const postButton = document.querySelector('#postbtn');
const msgDiv = document.querySelector('#msg');
const userNameSpan = document.querySelector('#user-name');
const userPasswordSpan = document.querySelector('#blog-title');
const userPostInputSpan = document.querySelector('#post-input');

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function renderLastRegistered() {
  const username = localStorage.getItem('username');
  const blogtitle = localStorage.getItem('blogtitle');
  const postinput = localStorage.getItem('postinput');

  if (!username || !blogtitle || !postinput) {
    return;
  }
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
    displayMessage('');

    localStorage.setItem('username', username);
    localStorage.setItem('blogtitle', blogtitle);
    localStorage.setItem('postinput', postInput);
    renderLastRegistered();
  }
});