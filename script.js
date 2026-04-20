const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const navbar = document.querySelector(".navbar");
//let ticking = false;

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

/*window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      navbar.classList.toggle("scrolled", window.scrollY > 50);
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });*/

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  overlay.classList.toggle("active"); 
});

overlay.addEventListener("click", () => {
  menu.classList.remove("active");
  overlay.classList.remove("active"); 
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active"); 
  });
});
// 1. Explore box model & how values are written for margin, and padding, in CSS.
// 2. What units can be used with window.scrollY?
// 3. Why use sticky positioning for the navbar? Why not use fixed positioning?
// 4. How can you optimize the scroll event listener for better performance? - Moderate level
// 5. What does transition property do in css
  //property, duration, timing-function, delay
// 6. What does mx-auto do in CSS? - Easy level
// 7. What does justify-content: center do in CSS? - Easy level
// 8. What does align-items: center do in CSS? - Easy level
// 9. What does text-decoration: none do in CSS? - Easy level
// 10. what are :hover and :active in CSS? - Easy level
// 11. How does media query work in CSS? - Moderate level