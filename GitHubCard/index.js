import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [ 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

for (let i = 0; i < followersArray.length; i++) {
  getGitCard(followersArray[i]);
}

function getGitCard(username) {
axios.get(`https://api.github.com/users/${username}`)
.then(resp => {
  document.querySelector('.cards').appendChild(githubCard(resp.data));
})
.catch(err => console.error(err))
}
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



function githubCard(gitObj){
  const gitWrapper = document.createElement('div')
  const gitImg = document.createElement('img')
  const gitCardInfo = document.createElement('div')
  const gitName = document.createElement('h3')
  const gitUserName = document.createElement('p')
  const gitLocation = document.createElement('p')
  const gitProfile = document.createElement('p')
  const gitProfileLink = document.createElement('a')
  const gitFollowers = document.createElement('p')
  const gitFollowing = document.createElement('p')
  const gitBio = document.createElement('p')

  gitWrapper.appendChild(gitImg)
  gitWrapper.appendChild(gitCardInfo)
  gitCardInfo.appendChild(gitName) 
  gitCardInfo.appendChild(gitUserName) 
  gitCardInfo.appendChild(gitLocation) 
  gitCardInfo.appendChild(gitProfile) 
  gitCardInfo.appendChild(gitProfileLink) 
  gitCardInfo.appendChild(gitFollowers) 
  gitCardInfo.appendChild(gitFollowing) 
  gitCardInfo.appendChild(gitBio) 

  gitImg.src = gitObj.avatar_url
  gitImg.alt = "github user"
  gitName.textContent = gitObj.name
  gitUserName.textContent = gitObj.login
  gitLocation.textContent = gitObj.gitLocation
  gitProfile.textContent = "Profile"
  gitProfileLink.textContent = "Link to Profile"
  gitProfileLink.href = gitObj.html_url;
  gitFollowers.textContent = `Followers: ${gitObj.followers}`
  gitFollowing.textContent - `Following: ${gitObj.following}`
  gitBio.textContent = gitObj.bio

  return gitWrapper;
}


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

gitWrapper.classList.add('card')
gitCardInfo.classList.add('card-info')
gitName.classList.add('name')
gitUserName.classList.add('username')

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
