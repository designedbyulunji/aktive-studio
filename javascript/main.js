"use strict"

/* HERO SECTION */

const navIconEl = document.querySelector(".right-navigation__icon");
const navLinksEl = document.querySelector(".right-navigation__links");

navIconEl.addEventListener("click", switchIcon);


function switchIcon() {
  navIconEl.classList.toggle("nav--close");

  if (navIconEl.classList.contains("nav--close")) {
    navLinksEl.style.transform = `translateX(0)`;
  }

  else {
    navLinksEl.style.transform = `translateX(1000px)`;

  }

}

/* GLOW ELEMENT */

const glowEl = document.querySelector(".right-bottom__glow");
const innerCircleEl = document.querySelector(".glow__inner-circle");

const currentDate = new Date();
const currentHour = currentDate.getHours();

if (currentHour >= 8 && currentHour <= 16) {
  glowEl.classList.remove("close");
  innerCircleEl.classList.remove("close");
}
else {
  glowEl.classList.add("close");
  innerCircleEl.classList.add("close");
  glowEl.setAttribute("title", "We are closed")
}

/* DROPDOWN */

const dropDownEl = document.querySelector(".dropdown");
const heroNavEl = document.querySelector(".hero-section__right-navigation");
const dropDownParentEl = document.querySelector(".dropdown-parent");


function addClass() {
  dropDownEl.classList.add("active");
  heroNavEl.classList.add("view-overflow");

}

function removeClass() {
  dropDownEl.classList.remove("active");
  heroNavEl.classList.remove("view-overflow");

}

dropDownParentEl.addEventListener("mouseover", addClass);
dropDownParentEl.addEventListener("mouseout", removeClass);

/* SWIPPER */

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ANIMATE PLACEHOLDER */

// FULL NAME PLACEHOLDER ANIMATION
let x = 0;
let typeSpeed = 150;
let fullNamePlaceholder = "";
let fullNamePlaceholderValue = `designedbyulunji`;

const fullNameEl = document.getElementById("fullname");

function animateFullNamePlaceholder() {
  fullNamePlaceholder += fullNamePlaceholderValue.charAt(x);
  fullNameEl.setAttribute("placeholder", fullNamePlaceholder);
  x++;

  setTimeout(animateFullNamePlaceholder, typeSpeed);
}

/* EXECUTE FULL NAME ANIMATION FUNCTION */
animateFullNamePlaceholder();

// EMAIL PLACEHOLDER ANIMATION

let y = 0;
let emailPlaceholder = "";
let emailPlaceholderValue = `designedbyulunji@gmail.com`

const emailEl = document.getElementById("email");

function animateEmailPlaceholder() {
  emailPlaceholder += emailPlaceholderValue.charAt(y);
  emailEl.setAttribute("placeholder", emailPlaceholder);
  y++;

  setTimeout(animateEmailPlaceholder, 100);
}

/* EXECUTE EMAIL ANIMATION FUNCTION */
animateEmailPlaceholder();