const navButton =  document.getElementById('nav_button');
const navigation = document.getElementsByClassName('navigation')[0];
const header = document.getElementById('header_nav');
const navigationStyle = window.getComputedStyle(navigation);

navButton.addEventListener('click', () => {
    const navStatus = navigationStyle.getPropertyValue('display')
    if (navStatus === 'none') {
        navigation.className = 'navigation show_nav';
        navButton.className = 'fa-solid fa-xmark';
    } else {
        navigation.className = 'navigation hide_nav';
        navButton.className = 'fa-solid fa-bars'
    }
})

window.addEventListener('load', () => {
    
})