const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const loginSignUp = document.querySelector('.loginSign')


function toggleMenu(){
    menu.classList.toggle('open')
    loginSignUp.classList.toggle('open')
    menuBtn.classList.toggle('open')
}


menuBtn.addEventListener('click', toggleMenu)