// let body2 = document.body;
let divContent = document.createElement('div');
divContent.setAttribute('class', 'contents');
body.appendChild(divContent);

let divHeadContent = document.createElement('div');
divHeadContent.setAttribute('class', 'head-content');
divContent.appendChild(divHeadContent);
let h1 = document.createElement('h1');
if (title == 'Home') {
    h1.innerHTML = 'Home';
} else if (title == 'Product') {
    h1.innerHTML = 'Product';
}
divHeadContent.appendChild(h1);

let divBodyContent = document.createElement('div');
divBodyContent.setAttribute('class', 'body-content');
divContent.appendChild(divBodyContent);