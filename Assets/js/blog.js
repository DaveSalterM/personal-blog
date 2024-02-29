const backButton = document.querySelector('#backbtn');

const username = document.querySelector('#username');

const blogtitle = document.querySelector('#blogtitle');

const postinput = document.querySelector('#postinput');

 //Blog post information retrieval
username.textContent = localStorage.getItem("username");
blogtitle.textContent = localStorage.getItem("blogtitle");
postinput.textContent = localStorage.getItem("postinput");

//Redirect function back to main page
function redirect() {
    window.location.href = "index.html";
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    redirect(); 
  });
