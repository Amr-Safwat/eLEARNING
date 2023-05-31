let links = document.querySelector('.links');
let link = document.getElementById('link');

link.onmouseenter = () => {
    links.style.opacity = 1;
}

link.onmouseleave = () => {
    links.style.opacity = 0;
}

let icon = document.querySelector('.menu');
let ul = document.querySelector('nav ul');

icon.onclick = () => {
    ul.classList.toggle('show');
}

let header = document.querySelector('header');

window.onscroll = function () {
    if(this.scrollY >= 200) {
        header.classList.add('h-fixed');
    } else {
        header.classList.remove('h-fixed');
    }
}