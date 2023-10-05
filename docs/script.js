const headerBurger = document.querySelector('.header_burger');
const headerMenu = document.querySelector('.header_menu');

const burgerClickHandler = () => {
    headerBurger.classList.toggle("active");
    headerMenu.classList.toggle("active")
};

headerBurger.addEventListener("click", burgerClickHandler);