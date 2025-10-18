import { users } from "../../users.js";
import {isaacProfile, aghatiseProfile} from "./profilesCollection.js"
// import {   } from "../../authentication.js";

export function isaacFunc() {
    let profileHTML = '';

    isaacProfile.forEach((accoutInfo) => {
        const name = accoutInfo.name;
        const profilePicture = accoutInfo.img;
        const bio = accoutInfo.bio;
        const followers = accoutInfo.followers;
        const posts =  accoutInfo.posts;
        const following = accoutInfo.following;
        const friendsName1 = accoutInfo.friends.Aghatise.name;
        const friendsName2 = accoutInfo.friends.Light.name;
        const friendsName3 = accoutInfo.friends.Fort.name;
        const friendsName4 = accoutInfo.friends.Emmanuel.name;
        const friendsName5 = accoutInfo.friends.Toji.name;
        const friendsProfile1 = accoutInfo.friends.Aghatise.profilePicture;
        const friendsProfile2 = accoutInfo.friends.Light.profilePicture;
        const friendsProfile3 = accoutInfo.friends.Fort.profilePicture;
        const friendsProfile4 = accoutInfo.friends.Emmanuel.profilePicture;
        const friendsProfile5 = accoutInfo.friends.Toji.profilePicture;
        
        const post1 = accoutInfo.content.post1.link;
        const post2 = accoutInfo.content.post2.link;
        const post3 = accoutInfo.content.post3.link;
        console.log(post1, post2, post3);

            profileHTML = `
            <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VeriVerse | Profile</title>
  <link rel="stylesheet" href="profile-page.css">
</head>
<body>
  <div class="qr-code">
  <img src="qr code image 3.jpg" alt="QR Code">
</div>
  <div class="profile-container">

    <!-- Profile Section -->
    <div class="profile-header">
      <div class="profile-pic">
        <img src="${profilePicture}" alt="Profile Picture">
      </div>
      <h2 class="username">${name}</h2>
      <p class="bio">${bio}</p>
    </div>

    <div class="profile-stats">
      <div class="stat">
        <h3>${posts}</h3>
        <p>Posts</p>
      </div>
      <div class="stat">
        <h3>${followers}</h3>
        <p>Followers</p>
      </div>
      <div class="stat">
        <h3>${following}</h3>
        <p>Following</p>
      </div>
    </div>

    <div class="profile-details">
      <h3>About Me</h3>
      <p>I believe in building meaningful connections and turning ideas into reality. VeriVerse is my home for growth and collaboration.</p>
    </div>

    <!-- Friends Section -->
    <!-- Friends Section -->
<div class="friends-section">
  <h3>Friends</h3>
  <div class="friends-list">
    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile1}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName1}</p>
    </div>

    <div class="container-profile">
    <div class="friend">
      <img src="${friendsProfile2}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName2}</p>
    </div>
    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile3}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName3}</p>
    </div>

    <div class="container-profile">
    <div class="friend">
      <img  src="${friendsProfile4}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName4}</p>
    </div>

    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile5}">
    </div>
    <p class="friend-name">${friendsName5}</p>
    </div>
  </div>
</div>
  </div>

  <!-- Video Grid Section -->
<div class="videos-section">
  <h3>My Posts</h3>
  <div class="video-grid">
    <div class="video-card">
      <!-- Example embed, replace with your Instagram/video iframe -->
      ${post1}

    </div>
    <div class="video-card">
      ${post2}
    </div>
    <div class="video-card">
      ${post3}
    </div>
  </div>
</div>

    <!-- Bottom Navigation -->
  <div class="bottom-nav">
   <a href="/LOGINS/Accounts/praiseoverah@gmail.com-profile.html" class="active">👤<span>Profile</span></a>
    <a href="#">🎥<span>Reels</span></a>
    
   
    <a href="#" class="plus-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="white">
        <path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 
        14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 
        32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 
        32-14.3 32-32s-14.3-32-32-32l-160 
        0 0-160z"/>
      </svg>
    </a>
    
    <a href="#">📝<span>Posts</span></a>
    <a href="../MESSAGES/messages.html">💬<span>Messages</span></a>
  </div>

   <script src="PROFILES/profiles.js" type="module"></script>
   <script src="PROFILES/profilesCollection.js" type="module"></script>
</body>
            `;
            });
        ;
        document.getElementById('profileHtml-js').innerHTML = profileHTML;
    }
   
   export function aghatiseFunc() {
        let profileHTML = '';

    aghatiseProfile.forEach((accoutInfo) => {
        const name = accoutInfo.name;
        const profilePicture = accoutInfo.img;
        const bio = accoutInfo.bio;
        const followers = accoutInfo.followers;
        const posts =  accoutInfo.posts;
        const following = accoutInfo.following;
        const friendsName1 = accoutInfo.friends.Aghatise.name;
        const friendsName2 = accoutInfo.friends.Light.name;
        const friendsName3 = accoutInfo.friends.Fort.name;
        const friendsName4 = accoutInfo.friends.Emmanuel.name;
        const friendsName5 = accoutInfo.friends.Toji.name;
        const friendsProfile1 = accoutInfo.friends.Aghatise.profilePicture;
        const friendsProfile2 = accoutInfo.friends.Light.profilePicture;
        const friendsProfile3 = accoutInfo.friends.Fort.profilePicture;
        const friendsProfile4 = accoutInfo.friends.Emmanuel.profilePicture;
        const friendsProfile5 = accoutInfo.friends.Toji.profilePicture;
        
        const post1 = accoutInfo.content.post1.link;
        const post2 = accoutInfo.content.post2.link;
        const post3 = accoutInfo.content.post3.link;
        console.log(post1, post2, post3);

            profileHTML = `
            <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VeriVerse | Profile</title>
  <link rel="stylesheet" href="profile-page.css">
</head>
<body>
  <div class="qr-code">
  <img src="qr code image 3.jpg" alt="QR Code">
</div>
  <div class="profile-container">

    <!-- Profile Section -->
    <div class="profile-header">
      <div class="profile-pic">
        <img src="${profilePicture}" alt="Profile Picture">
      </div>
      <h2 class="username">${name}</h2>
      <p class="bio">${bio}</p>
    </div>

    <div class="profile-stats">
      <div class="stat">
        <h3>${posts}</h3>
        <p>Posts</p>
      </div>
      <div class="stat">
        <h3>${followers}</h3>
        <p>Followers</p>
      </div>
      <div class="stat">
        <h3>${following}</h3>
        <p>Following</p>
      </div>
    </div>

    <div class="profile-details">
      <h3>About Me</h3>
      <p>I believe in building meaningful connections and turning ideas into reality. VeriVerse is my home for growth and collaboration.</p>
    </div>

    <!-- Friends Section -->
    <!-- Friends Section -->
<div class="friends-section">
  <h3>Friends</h3>
  <div class="friends-list">
    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile1}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName1}</p>
    </div>

    <div class="container-profile">
    <div class="friend">
      <img src="${friendsProfile2}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName2}</p>
    </div>
    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile3}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName3}</p>
    </div>

    <div class="container-profile">
    <div class="friend">
      <img  src="${friendsProfile4}" alt="Friend">
    </div>
    <p class="friend-name">${friendsName4}</p>
    </div>

    <div class="container-profile">
    <div class="friend story-active">
      <img src="${friendsProfile5}">
    </div>
    <p class="friend-name">${friendsName5}</p>
    </div>
  </div>
</div>
  </div>

  <!-- Video Grid Section -->
<div class="videos-section">
  <h3>My Posts</h3>
  <div class="video-grid">
    <div class="video-card">
      <!-- Example embed, replace with your Instagram/video iframe -->
      ${post1}

    </div>
    <div class="video-card">
      ${post2}
    </div>
    <div class="video-card">
      ${post3}
    </div>
  </div>
</div>

    <!-- Bottom Navigation -->
  <div class="bottom-nav">
    <a href="#" class="active">👤<span>Profile</span></a>
    <a href="#">🎥<span>Reels</span></a>
    
   
    <a href="#" class="plus-btn">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24" fill="white">
        <path d="M256 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 160-160 0c-17.7 0-32 
        14.3-32 32s14.3 32 32 32l160 0 0 160c0 17.7 14.3 
        32 32 32s32-14.3 32-32l0-160 160 0c17.7 0 
        32-14.3 32-32s-14.3-32-32-32l-160 
        0 0-160z"/>
      </svg>
    </a>
    
    <a href="#">📝<span>Posts</span></a>
    <a href="../MESSAGES/messages.html">💬<span>Messages</span></a>
  </div>

   <script src="PROFILES/profiles.js" type="module"></script>
   <script src="PROFILES/profilesCollection.js" type="module"></script>
</body>
            `;
            });
        ;
        document.getElementById('profileHtml-js').innerHTML = profileHTML;
    }
    
   export const userEmail = localStorage.getItem('loggedInUser');
    console.log(userEmail);
    
    document.addEventListener('DOMContentLoaded', () => {
        if (userEmail === 'praiseoverah@gmail.com') {
        isaacFunc();
    } else if (userEmail === 'aghatise@gmail.com') {
        aghatiseFunc();
    }
    });
    

