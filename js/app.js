'use.strict';
/*====MENU SHOW Y HIDDEN====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

//SHOW
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})

//HIDDEN
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

/*====REMOVE MENU====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====SCROOL SECTION ACTIVE LINK====*/
const sections = document.querySelectorAll('section[id]')
console.log(sections);

window.addEventListener('scroll', scrollActive)

function scrollActive() {
    const scrollY = window.pageYOffset
    console.log(scrollY);

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        console.log(sectionHeight);
        const sectionTop = current.offsetTop - 50
        console.log(sectionTop);
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelectorAll('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}