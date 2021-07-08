burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
login = document.querySelector('.login')
burger.addEventListener('click',()=>{
    login.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');

})
