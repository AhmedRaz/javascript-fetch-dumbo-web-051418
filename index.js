const app = "I don't do much.";
const token = "YOUR TOKEN HERE";

// fetch('https://api.github.com/repos/jquery/jquery/commits', {
//   headers:{Authorization: `token ${token}`}
// })
//   .then(res => res.json())
//   .then(json => console.log(json));


  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
