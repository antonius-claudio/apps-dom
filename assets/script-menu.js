let main = document.getElementById('main');
let divClassMenu = document.createElement('div');
divClassMenu.setAttribute('class', 'menu');
main.appendChild(divClassMenu);

let divClassHead = document.createElement('div');
divClassHead.setAttribute('class', 'head-menu');
let img = document.createElement('img');
img.setAttribute('src', 'https://image.freepik.com/free-vector/laptop-isometric-online-shopping-items_23-2147644946.jpg');
divClassMenu.appendChild(divClassHead);
divClassHead.appendChild(img);

let divClassContentMenu = document.createElement('div');
divClassContentMenu.setAttribute('class', 'content-menu');
divClassMenu.appendChild(divClassContentMenu);
let ul = document.createElement('ul');
divClassMenu.appendChild(ul);

let a = [];
let li = [];
for (let i = 0; i < 4; i++) {
    a[i] = document.createElement('a');
    ul.appendChild(a[i]);
    li[i] = document.createElement('li');
    a[i].appendChild(li[i]);
}
li[0].innerHTML = 'Home';
a[0].setAttribute('href', 'home.html');
li[1].innerHTML = 'Product';
a[1].setAttribute('href', 'product.html');
li[2].innerHTML = 'Logout';
a[2].setAttribute('href', 'logout.html');
li[3].innerHTML = 'Login';
a[3].setAttribute('href', 'index.html');
console.log(a);