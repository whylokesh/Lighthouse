'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const words = ['Development', 'Content', 'Marketing'];
const typewriterElement = document.getElementById('typewriter');

let currentIndex = 0;

function typewriter() {
  const currentWord = words[currentIndex];
  const timeoutDuration = currentWord === 'Marketing' ? 2000 : 500; // Longer pause for last word
  const typingSpeed = 100; // Milliseconds per character

  typewriterElement.textContent = ''; // Clear existing content

  for (let i = 0; i < currentWord.length; i++) {
    setTimeout(() => {
      typewriterElement.textContent += currentWord[i];
    }, i * typingSpeed);
  }

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % words.length; // Cycle through words
    typewriter();
  }, currentWord.length * typingSpeed + timeoutDuration);
}

typewriter(); // Start the typewriter effect


// Google sheet data-posting

let url =
  "https://script.google.com/macros/s/AKfycbzbt_C3ToL4N1VUTpe7C0YBuJi8DSGhicyRbkTTsSttd6oUP-O0KfU-IRQlTS9Mui-KPQ/exec";

let form = document.querySelector("#enquiry-form");
form.addEventListener('submit', (e) =>{
  
  let data = new FormData(form);
  fetch(url, {
    method: "POST",
    body: data
  }).then((res) => res.text()).then((finalRes) => console.log(finalRes), console.log("Data sent!")).catch((err)=>console.error(err))
  e.preventDefault()
})