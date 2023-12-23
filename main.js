function sarch() {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    async function githubUsers() {
      const response = await fetch("https://api.github.com/users");
      const users = await response.json();

      users.forEach((user) => {
        if (user.login == inp.value) {
          nameEL.textContent = `The ${user.login}`;
          
          nikUrl.textContent = `@${user.login}`;
          url.setAttribute("href", `${user.url}`);
          avatar.setAttribute("src", user.avatar_url);
          repos.textContent = user.repos_url.length;
          followers.textContent = user.followers_url.length;
          following.textContent = user.following_url.length;
        }
      });
    }
    githubUsers();
  });
}
sarch();
