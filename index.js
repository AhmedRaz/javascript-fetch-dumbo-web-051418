const app = "I don't do much.";
const token = "41e3a63624cb661af97a26ca9fa5d2f536340d5a";

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
