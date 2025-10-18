import { users } from "./users.js";

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const submit = document.getElementById('submit');

 function getEmailInput() {
    const email = document.getElementById('email');
    return email ? email.value.trim() : '';
  }

  function loginCheck(e) {
    e.preventDefault();
    const emailInput = email.value.trim();
    const passwordInput = password.value.trim();

    const user = users.find(account =>
      (emailInput === account.Username || emailInput === account.Email) &&
      passwordInput === account.password
    );

    if (user) {
        localStorage.setItem('loggedInUser', emailInput);
      window.location.href = './LOGINS/Accounts/praiseoverah@gmail.com-profile.html';
    } else {
      alert('wrong password');
    }
  }

  submit.addEventListener('click', loginCheck);

