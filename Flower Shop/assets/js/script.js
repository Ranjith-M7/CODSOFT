const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const isHeaderSticky = window.scrollY > 0;

  header.classList.toggle("sticky", isHeaderSticky);

  if (isHeaderSticky) {
    const headerLogo = header.querySelector(".header__logo");
    headerLogo.style.width = "30px";
  } else {
    const headerLogo = header.querySelector(".header__logo");
    headerLogo.style.width = ""; // Revert to the default width
  }
});

const headerMenu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".menu-btn");
const headerMenuItems = document.querySelectorAll("li a");

menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});
