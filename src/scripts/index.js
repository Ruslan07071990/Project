// const burger = document.querySelector('.burger-menu-button')
// console.log(burger);
// const nav = document.querySelector('.header__menu')
// console.log(nav)
// const closet = document.querySelector('.menu-close')

// burger.addEventListener('click', () => {
//     nav.classList.toggle('menu-active')
//     closet.classList.toggle('opacity')
// })
const burger = document.querySelector('.header-menu_burger')
console.log(burger);
const nav = document.querySelector('.header-nav_list')
console.log(nav);
const clouse = document.querySelector('.svg-menu_burger-clouse')

const body = document.querySelector('body')

burger.addEventListener('click', () => {
    // burger.classList.toggle('active')
    nav.classList.toggle('menu-active')
    // body.classList.toggle('lock')
})