//Burger menu lines selection
const burger__menu__lines = document.querySelectorAll(".js-menu__line");
//Burger menu selection
const burger__menu = document.querySelector(".js-burger__menu");
//Menu selection
const menu = document.querySelector(".js-menu");
//Menu items selection
const menu__items = document.querySelectorAll(".js-menu__item");
//Body selection
const body = document.querySelector("body");
//Menu links selection
const menu__links = document.querySelectorAll(".js-menu__link");

//Menu animation
function show__menu() {
  //Fixed body when menu is open
  body.classList.toggle("body-hidden");
  //Menu animation
  menu.classList.toggle("active");
  //Burger menu animation
  burger__menu__lines.forEach((item) => {
    item.classList.toggle("active");
  });
  //Links animation
  menu__items.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `slide__menu__items 0.5s forwards ${index / 7}s`;
    }
  });
}

//Menu indicator show animation
function showIndicator() {
  this.nextElementSibling.classList.add("active");
}
//Menu indicator hide animation
function hideIndicator() {
  this.nextElementSibling.classList.remove("active");
}

//Menu animation call
burger__menu.addEventListener("click", show__menu);
//Menu indicator call
menu__links.forEach((item) => {
  item.addEventListener("mouseenter", showIndicator);
  item.addEventListener("mouseleave", hideIndicator);
});
