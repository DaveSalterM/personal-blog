let username = localStorage.getItem(`username`);



function postBlogToPage() {
  const username = localStorage.getItem('username');
  const blogtitle = localStorage.getItem('blogtitle');
  const postinput = localStorage.getItem('postinput');

  if (!username || !blogtitle || !postinput) {
    return;
  }

  userNameSpan.textContent = username;
  userBlogTitleSpan.textContent = blogtitle;
  userPostInputSpan.textContent = postInput;
}