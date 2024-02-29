
  const username = document.querySelector('#username');
  const blogtitle = document.querySelector('#blogtitle');
  const postinput = document.querySelector('#postinput');

  username.textContent = localStorage.getItem("username");
  blogtitle.textContent = localStorage.getItem("blogtitle");
  postinput.textContent = localStorage.getItem("postinput");
