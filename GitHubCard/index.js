/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
//"JesusCGuerrero", "DustinG98", "Callisto1981", "CodyFlys", "leachcoding"
const followersArray = [];

axios.get("https://api.github.com/users/DeLaMoraRodrigo/followers")
  .then( response => {
    console.log(response);
    response.data.forEach( val => {followersArray.push(val.login)});
    console.log(followersArray);
  })
  .then( response => {
    followersArray.forEach( val => {
      let friendUrl = `https://api.github.com/users/${val}`;
    
      axios.get(friendUrl)
        .then( response => {
          document.querySelector(".cards").appendChild(cardCreator(response.data));
        })
        .catch ( error => {
          console.log(`This is an error`, error);
        })
    })
  })
  .catch( error => {
    console.log(`This is an error`, error);
  })

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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
function cardCreator(data){
  const card = document.createElement("div");
  card.classList.add("card");

  const profilePic = document.createElement("img");
  profilePic.src = data.avatar_url;
  card.appendChild(profilePic);

  const infoDiv = document.createElement("div");
  infoDiv.classList.add("card-info");
  card.appendChild(infoDiv);

  const name = document.createElement("h3");
  name.classList.add("name");
  name.textContent = data.name;
  infoDiv.appendChild(name);

  const username = document.createElement("p");
  username.classList.add("username");
  username.textContent = data.login;
  infoDiv.appendChild(username);

  const location = document.createElement("p");
  location.textContent = `Location: ${data.location}`;
  infoDiv.appendChild(location);

  const profile = document.createElement("p");
  profile.textContent = `Profile: `;
  infoDiv.appendChild(profile);

  const url = document.createElement("a");
  url.href = data.html_url;
  url.textContent = data.html_url;
  profile.appendChild(url);

  const followers = document.createElement("p");
  followers.textContent = `Followers: ${data.followers}`;
  infoDiv.appendChild(followers);

  const following = document.createElement("p");
  following.textContent = `Following: ${data.following}`;
  infoDiv.appendChild(following);

  const bio = document.createElement("p");
  bio.textContent = data.bio;
  infoDiv.appendChild(bio);

  return card;
}

axios.get("https://api.github.com/users/DeLaMoraRodrigo")
  .then ( response => {
    const cards = document.querySelector(".cards");
    cards.appendChild(cardCreator(response.data));
  })
  .catch ( error => {
    console.log(`This is an error`, error);
  });

followersArray.forEach(val => {
  let url
})

// followersArray.forEach(val => {
//   let friendUrl = `https://api.github.com/users/${val}`;

//   axios.get(friendUrl)
//     .then( response => {
//       document.querySelector(".cards").appendChild(cardCreator(response.data));
//     })
//     .catch ( error => {
//       console.log(`This is an error`, error);
//     })
// })

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
