const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");
const mobileMenu = document.querySelector(".mobile-menu");

const mobileToggle = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () => document.classList.toggle("is-scroll-disabled");

menuBtnClose.addEventListener("click", mobileToggle);
menuBtnOpen.addEventListener("click", mobileToggle);

menuBtnClose.addEventListener("click", disableScroll);
menuBtnOpen.addEventListener("click", disableScroll);
