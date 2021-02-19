
const menuBtn = document.querySelector('#menu');
const navLinks = document.querySelector('#links');
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle("openMenu");
});