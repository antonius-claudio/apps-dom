let body = document.body;

let divClassMenu = document.createElement('div');
divClassMenu.setAttribute('class', 'menu');
body.appendChild(divClassMenu);

let divClassHead = document.createElement('div');
divClassHead.setAttribute('class', 'head-menu');
let img = document.createElement('img');
img.setAttribute('src', './img/logo.png');
divClassMenu.appendChild(divClassHead);
divClassHead.appendChild(img);

let divClassContentMenu = document.createElement('div');
divClassContentMenu.setAttribute('class', 'content-menu');
divClassMenu.appendChild(divClassContentMenu);
let ul = document.createElement('ul');
divClassMenu.appendChild(ul);

let a = [];
let li = [];
for (let i = 0; i < 3; i++) {
    a[i] = document.createElement('a');
    ul.appendChild(a[i]);
    li[i] = document.createElement('li');
    a[i].appendChild(li[i]);
}
let title = document.title;
li[0].innerHTML = 'Home';
a[0].setAttribute('href', 'home.html');
li[1].innerHTML = 'Product';
a[1].setAttribute('href', 'product.html');
li[2].innerHTML = 'Login';
a[2].setAttribute('href', 'index.html');
if (title == 'Home') {
    a[0].setAttribute('class', 'active');
} else if (title == 'Product') {
    a[1].setAttribute('class', 'active');
}