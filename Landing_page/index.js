const menuBtn = document.querySelector(".c_menu__btn");
const menuItems = document.querySelector(".c_header__menu");
const menuItem = document.querySelectorAll(".c_header__menu li");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");

  document.body.style.overflow = "hidden";
});

menuItem.forEach((item, index) => {
  item.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
});
// menuItem.forEach((item, index) => {
//   item.style.animation = `navLinkFade 0.5s ease forward ${index / 7 + 0.3}s`;
// });
