const menu = document.querySelector("nav .menu");
const navMenu = document.querySelector("header nav .nav-menu");


menu.addEventListener("click", function(){
    navMenu.classList.toggle("active");
})

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
    }
  });