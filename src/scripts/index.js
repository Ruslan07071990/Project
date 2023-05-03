// const burger = document.querySelector('.burger-menu-button')
// console.log(burger);
// const nav = document.querySelector('.header__menu')
// console.log(nav)
// const closet = document.querySelector('.menu-close')

// burger.addEventListener('click', () => {
//     nav.classList.toggle('menu-active')
//     closet.classList.toggle('opacity')
// })

const btn = 'header-menu_burger';
const menu ='header-nav_list';
const hederNav = document.querySelector('.header-nav')

const burger = document.querySelector('.header-menu_burger')
console.log(burger);
const nav = document.querySelector('.header-nav_list')
console.log(nav);
const clouse = document.querySelector('.svg-menu_burger-clouse')

const body = document.querySelector('body')

burger.addEventListener('click', () => {
    // burger.classList.toggle('opacity')
    nav.classList.toggle('menu-active')
    clouse.classList.toggle('opacity')
    // body.closest('menu-active')
})

document.addEventListener("click", ({ target }) => {
    if (
      !(
        target.closest(`.${btn}`) ||
        target.closest(`.${menu}`)
      )
    ) {
    //   headerBurgerMenu.classList.remove(ACTIVE_BURGER_BUTTON_CLASS_NAME);
      nav.classList.remove('menu-active');
      clouse.classList.remove('opacity')
    }
  });