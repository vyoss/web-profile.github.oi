const navbarNav = document.querySelector('ul');
document.querySelector('#hamburger').onclick  = () => {
    navbarNav.classList.toggle('active')
}

const menuHamburger = document.querySelector('#hamburger')
document.addEventListener('click', function(e){
    if(!menuHamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})