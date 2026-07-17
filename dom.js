
const header = document.getElementById("main-header");
console.log("getElementById:", header);

const contents = document.getElementsByClassName("content");
console.log("getElementsByClassName:", contents);

const paragraphs = document.getElementsByTagName("p");
console.log("getElementsByTagName:", paragraphs);

const firstLink = document.querySelector(".nav-link");
console.log("querySelector:", firstLink);

const allLinks = document.querySelectorAll(".nav-link");
console.log("querySelectorAll:", allLinks);

// 1. The h1 element
const h1 = document.querySelector("h1");
console.log("1. h1 element:", h1);

// 2. All elements with class "content"
const allContent = document.querySelectorAll(".content");
console.log("2. All .content:", allContent);

// 3. The form with id "contact-form"
const contactForm = document.getElementById("contact-form");
console.log("3. contact form:", contactForm);

// 4. The email input
const emailInput = document.querySelector("#email");
console.log("4. email input:", emailInput);

// 5. All list items in the nav
const navItems = document.querySelectorAll(".nav-list li");
console.log("5. nav list items:", navItems);

// 6. The first .nav-link
const firstNavLink = document.querySelector(".nav-link");
console.log("6. first nav-link:", firstNavLink);

// 7. The last paragraph
const allP = document.querySelectorAll("p");
const lastP = allP[allP.length - 1];
console.log("7. last paragraph:", lastP);
