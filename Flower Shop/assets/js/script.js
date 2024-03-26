const header = document.querySelector("header");
const headerMenu = document.querySelector(".header__menu");
const menuBtn = document.querySelector(".menu-btn");
const headerMenuItems = document.querySelectorAll("li a");
const email = document.querySelector("#email");

// Add event listener to adjust the width size of the the header when scrolling
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
// Add event listener to the hamburger menu
menuBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});
console.log;
// Add event listener to the navigation links
headerMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerMenu.classList.remove("show");
  });
});

// Email validation
const validateEmail = (email) => {
  // define a basic regular expression
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegEx.test(email);
};

email.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    // Reset the value of the email input field to empty
    email.value = "";
    email.style.border = "none";
    return;
  }
  if (validateEmail(e.target.value)) {
    email.style.border = "1px solid green";
  } else {
    email.style.border = "1px solid red";
  }
});
