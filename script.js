// script.js

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  
  showMenu("nav-toggle", "nav-menu");
  
  /*===== REMOVE MENU ON LINK CLICK =====*/
  const navLink = document.querySelectorAll(".nav__link"),
        navMenu = document.getElementById("nav-menu");
  
  function linkAction() {
    navMenu.classList.remove("show");
  }
  navLink.forEach(n => n.addEventListener("click", linkAction));
  
  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  const sections = document.querySelectorAll("section[id]");
  
  function scrollActive() {
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
  
      const link = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }
  window.addEventListener("scroll", scrollActive);
  
  /*===== CHANGE HEADER COLOR ON SCROLL =====*/
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("header");
    if (window.scrollY >= 200) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
  });
  