const menu = document.querySelector('.menu-icon');
const closeItems = document.querySelectorAll('.closing');
const displayMobileMenu = () => {
  menu.style.display = 'block';
};
const closeMobileMenu = () => {
  menu.style.display = 'none';
};
document
  .querySelector('.openMenu')
  .addEventListener('click', displayMobileMenu);
closeItems.forEach((element) => element.addEventListener('click', closeMobileMenu));