const backButton = document.querySelector('#backbtn');



const username = document.querySelector('#username');
const blogtitle = document.querySelector('#blogtitle');
const postinput = document.querySelector('#postinput');

 
username.textContent = localStorage.getItem("username");
blogtitle.textContent = localStorage.getItem("blogtitle");
postinput.textContent = localStorage.getItem("postinput");

function redirect() {
    window.location.href = "index.html";
}

backButton.addEventListener('click', function (event) {
    event.preventDefault();
    redirect(); 
  });
