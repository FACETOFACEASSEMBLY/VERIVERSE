import { chatMessageAghatise, chatMessageIsaac } from "./chatSec.js";
import {  getUserEmail,  } from "../Accounts/PROFILES/profiles.js";

function aghatiseMessagePage() {
    let chatMessageHTML = '';

chatMessageAghatise.forEach((chatInfo) => {
    const username = chatInfo.name;
    const userImage = chatInfo.img;
    const recentMessage = chatInfo.recentMessage;
    const unreadMessages = chatInfo.unreadMessages;
    
    chatMessageHTML += `
            <div class="message-item">
        <div class="profile-wrapper">
        <img src="${userImage}" alt="Profile">
        <span class="online-dot"></span>
        </div>
        <div class="message-info">
        <h2>${username}</h2>
        <p>${recentMessage}</p>
        </div>
        <div class="message-meta">
        <span class="time">10:30 AM</span>
        ${unreadMessages}
        </div>
    </div>
    `;
    document.getElementById('messages-js').innerHTML = chatMessageHTML;
});
}
function isaacMessagePage() {
    let chatMessageHTML = '';

chatMessageIsaac.forEach((chatInfo) => {
    const username = chatInfo.name;
    const userImage = chatInfo.img;
    const recentMessage = chatInfo.recentMessage;
    const unreadMessages = chatInfo.unreadMessages;
    
    chatMessageHTML += `
            <div class="message-item">
        <div class="profile-wrapper">
        <img src="${userImage}" alt="Profile">
        <span class="online-dot"></span>
        </div>
        <div class="message-info">
        <h2>${username}</h2>
        <p>${recentMessage}</p>
        </div>
        <div class="message-meta">
        <span class="time">10:30 AM</span>
        ${unreadMessages}
        </div>
    </div>
    <div style = "display: none;" id = "profileHtml-js"></div>
    `;
    document.getElementById('messages-js').innerHTML = chatMessageHTML;
});
}
    const userEmails = getUserEmail();
if (userEmails === 'praiseoverah@gmail.com') {
    isaacMessagePage();
} else if (userEmails === 'aghatise@gmail.com') {
    aghatiseMessagePage();
}
