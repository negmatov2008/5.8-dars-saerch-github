async function githubUsers() {
  const response = await fetch("https://api.github.com/users");
  const users = await response.json();
  console.log(users);
}
 async function data (){
  const javob = await githubUsers()
  console.log(javob)
 }
