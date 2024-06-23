var menu = document.querySelector(".menu");
var Bar = document.querySelector(".Bar");
// var menu = document.querySelector('.menu');
const hideNav = () => {
    menu.style.transition = "all 0.4s ease";
    menu.style.left = "-100%";
    Bar.style.transition = "all 0.2s ease";
    Bar.style.transform = "translateX(0px)";
    Bar.style.display = "block";

    // Bar.style.overflow = "visible";
};

const showNav = () => {
  Bar.style.transform = "translateX(-60px)";
  Bar.style.transition = "all 0.4s ease";
  Bar.style.display = "none";
  // Bar.style.width = "0";
  menu.style.transition = "all 0.4s ease";
  menu.style.left = "0%";
};
