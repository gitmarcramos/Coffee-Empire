
//! BURGER INTERACTION
const burger = document.querySelector('#burger');
const navbar = document.querySelector('#navbar');
const menu = document.querySelector('#nav-bar-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('close');
    navbar.classList.toggle('nav-closed')
})

menu.addEventListener('click', () => {
    window.location.href = "/index.html";
})


