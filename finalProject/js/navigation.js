
const menuBtn = document.querySelector('.btn-menu');
const mnav = document.querySelector('#nav-menu');

menuBtn.addEventListener('click', () =>
{mnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mnav.classList.remove('responsive')};