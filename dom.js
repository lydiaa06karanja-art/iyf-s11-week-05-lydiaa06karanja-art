
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
//  TRAVERSING THE DOM 

const nav = document.querySelector("nav");

// Parent
console.log("Parent of nav:", nav.parentElement);

// Children
console.log("Children of nav:", nav.children);
console.log("First child of nav:", nav.firstElementChild);
console.log("Last child of nav:", nav.lastElementChild);

// Siblings
const article = document.querySelector("article");
console.log("Next sibling of article:", article.nextElementSibling);
console.log("Previous sibling of article:", article.previousElementSibling);

// Descendants
const navLinks = nav.querySelectorAll(".nav-link");
console.log("All nav links inside nav:", navLinks)

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const navInsideHeader = header.querySelector("nav");
console.log("1. nav inside header:", navInsideHeader);

// 2. Select the first nav-link, then get its parent li
const firstNavLink = document.querySelector(".nav-link");
const parentLi = firstNavLink.parentElement;
console.log("2. parent li of first nav-link:", parentLi);

// 3. Select the article, then get its next sibling (section)
const articleEl = document.querySelector("article");
const nextSiblingSection = articleEl.nextElementSibling;
console.log("3. next sibling of article:", nextSiblingSection);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector(".nav-list");
const liChildren = ul.children;
console.log("4. all li children of ul:", liChildren);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");
const body = footer.parentElement;
console.log("5. body from footer:", body);
//  MODIFYING CONTENT 

//  TEXT CONTENT
const h1 = document.querySelector("h1");

// Reading text
console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);

// Modifying text
h1.textContent = "DOM Manipulation Masterclass";
console.log("h1 changed to:", h1.textContent);


//  HTML CONTENT
const article = document.querySelector("article");

// Reading HTML
console.log("article innerHTML:", article.innerHTML);

// Modifying HTML
article.innerHTML = `
    <h2>Updated Article</h2>
    <p>This content was changed with JavaScript!</p>
`;

// Safer: textContent escapes HTML
const userInput = "<script>alert('hacked')</script>";
article.textContent = userInput;
console.log("Safer with textContent:", article.textContent);


//  ATTRIBUTES
const link = document.querySelector(".nav-link");

// Get attribute
console.log("href getAttribute:", link.getAttribute("href"));
console.log("href property:", link.href);

// Set attribute
link.setAttribute("href", "https://example.com");
link.href = "https://example.com";

// Check attribute
console.log("has target:", link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
const element = document.querySelector(".container");
element.dataset.id = "123";
element.dataset.category = "main";
console.log("data-id:", element.dataset.id);
console.log("data-category:", element.dataset.category);
element.dataset.newAttr = "value";


//  STYLES
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles
Object.assign(container.style, {
    backgroundColor: "#333",
    color: "white",
    padding: "20px"
});
console.log("Styles updated!");
