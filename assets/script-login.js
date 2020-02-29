let body = document.body;
body.setAttribute('class', 'content');
let divMainLogin = document.getElementById('main-login');

let divIdHeader = document.createElement('div');
divIdHeader.setAttribute('class', 'header-login');
divMainLogin.appendChild(divIdHeader);
let h1 = document.createElement('h1');
h1.innerHTML = 'LOGIN';
divIdHeader.appendChild(h1);

let divIdContent = document.createElement('div');
divIdContent.setAttribute('class', 'content-login');
divMainLogin.appendChild(divIdContent);
let formLogin = document.createElement('form');
formLogin.setAttribute('action', '#');
divIdContent.appendChild(formLogin);

let inputUser = document.createElement('input');
inputUser.setAttribute('name', 'username');
inputUser.setAttribute('id', 'username');
inputUser.setAttribute('value', '');
inputUser.setAttribute('placeholder', 'Username');
inputUser.setAttribute('type', 'text');
formLogin.appendChild(inputUser);

let inputPass = document.createElement('input');
inputPass.setAttribute('name', 'password');
inputPass.setAttribute('id', 'password');
inputPass.setAttribute('value', '');
inputPass.setAttribute('placeholder', 'Password');
inputPass.setAttribute('type', 'password');
formLogin.appendChild(inputPass);

let inputButton = document.createElement('button');
inputButton.innerHTML = 'Login';
inputButton.setAttribute('onclick', 'login()');
formLogin.appendChild(inputButton);
formLogin.addEventListener("submit", function(event){
    event.preventDefault()
});
function login() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let regexUsername = /^.{6,}$/;
    let regexPassword = /^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]))/;
    if (username.value == '') {
        alert('Username must be filled out!');
    } else if (password.value == '') {
        alert('Password must be filled out!');
    } else if (regexUsername.test(username.value) == false) {
        alert('Username must contain at least 6 characters!');
    } else if (regexPassword.test(password.value) == false) {
        alert('Password must contain at least 1 number, 1 lowercase, 1 upercase!');
    } else {
        window.location.href = 'home.html';
    }
    
};