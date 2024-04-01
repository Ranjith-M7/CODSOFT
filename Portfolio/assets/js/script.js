// Wait for the window to load
window.addEventListener("load", function () {
  // Get the preloader element
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  // After fading out, remove it from the DOM
  setTimeout(function () {
    // Fade out the preloader

    preloader.parentNode.removeChild(preloader);
  }, 500);
});

// Add event listerner to set the heaver sticky when scrolling
window.addEventListener("scroll", () => {
  document.querySelector("header").classList.toggle("sticky", scrollY > 0);
});

// Change hamburger menu icon depends on nav bar opens or not
const hamburgerMenu = document.querySelector(".hamburger-menu");
const menuList = document.querySelector(".menu-list");
let isOpen = false;

hamburgerMenu.addEventListener("click", () => {
  isOpen = !isOpen;
  if (isOpen) {
    hamburgerMenu.innerHTML = `<i class="fa-brands fa-xing"></i>`;
  } else {
    hamburgerMenu.innerHTML = `<i class="fa fa-bars"></i>`;
  }

  menuList.classList.toggle("show");
});

// When click the nav link removes the nav bar
const navLinks = document.querySelectorAll(".menu-list a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-list").classList.toggle("show");
    isOpen = false;
    if (!isOpen) {
      hamburgerMenu.innerHTML = `<i class="fa fa-bars"></i>`;
    }
  });
});

// Function to run the animation
function runAnimation() {
  const text = document.querySelector(".job");
  const words = text.innerText.split(",");
  let currentIndex = 0;

  function animateWords() {
    // Fade out the current word before updating
    text.style.opacity = "0";

    setTimeout(() => {
      // Update the text content with the current word
      text.textContent = words[currentIndex];

      // Fade in the new word
      text.style.opacity = "1";

      // Move to the next word after a short delay
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        animateWords();
      }, 1000);
    }, 500);
  }

  animateWords();
}
runAnimation();
