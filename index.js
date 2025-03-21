require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const githubData = {
  "login": "RishitaChakravo",
  "id": 180525670,
  "node_id": "U_kgDOCsKaZg",
  "avatar_url": "https://avatars.githubusercontent.com/u/180525670?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RishitaChakravo",
  "html_url": "https://github.com/RishitaChakravo",
  "followers_url": "https://api.github.com/users/RishitaChakravo/followers",
  "following_url": "https://api.github.com/users/RishitaChakravo/following{/other_user}",
  "gists_url": "https://api.github.com/users/RishitaChakravo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RishitaChakravo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RishitaChakravo/subscriptions",
  "organizations_url": "https://api.github.com/users/RishitaChakravo/orgs",
  "repos_url": "https://api.github.com/users/RishitaChakravo/repos",
  "events_url": "https://api.github.com/users/RishitaChakravo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RishitaChakravo/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2024-09-05T09:38:22Z",
  "updated_at": "2025-03-21T18:33:31Z"
}

app.get("/", (req, res) => {
  res.send('Hello World!');
})

app.get("/login", (req, res) => {
  res.send('SignUp if you dont have account');
})

app.get('/github', (req, res) => {
  res.json(githubData);
})

app.listen(process.env.PORT, ()=>{
  console.log(`Print in port ${port}`);
});