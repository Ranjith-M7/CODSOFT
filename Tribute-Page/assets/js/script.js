const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuList = document.querySelector(".menu-list");
const navLinks = document.querySelectorAll(".menu-list a");
const menu = document.querySelector(".menu");

// Add event listener to show nav menu
hamburgerMenu.addEventListener("click", () => {
  menuList.classList.toggle("show");
});

navLinks.forEach((a)=>{
    a.addEventListener(("click"),()=>{
        menuList.classList.toggle("show");
    })
})

// Add event listener to set the header sticky when scrolling
window.addEventListener("scroll", () => {
  document.querySelector("#header").classList.toggle("sticky", scrollY > 0);
});

