
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
//  ADDING & REMOVING ELEMENTS 

//  CREATING ELEMENTS
// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph added with JS";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph);
console.log("Appended new paragraph");

// Insert before another element
const firstParagraph = article.querySelector("p");
const newP2 = document.createElement("p");
newP2.textContent = "This goes before the first paragraph";
article.insertBefore(newP2, firstParagraph);

// Modern insertion methods
const newP3 = document.createElement("p");
newP3.textContent = "prepend example";
article.prepend(newP3);

const newP4 = document.createElement("p");
newP4.textContent = "append example";
article.append(newP4);

firstParagraph.before(document.createElement("hr"));
firstParagraph.after(document.createElement("hr"));


//  REMOVING ELEMENTS
// Remove an element
const footer = document.querySelector("footer");
// footer.remove(); // Commented so we don't actually delete it. Uncomment to test
console.log("Can remove footer with: footer.remove()");

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
// lastLink.parentElement.removeChild(lastLink); // Commented to keep nav
console.log("Can remove last nav item with removeChild");

// Clear all children
// article.innerHTML = ""; // Simple but dangerous
// OR safer way:
function clearElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}
console.log("Can clear article with clearElement(article)");


//  CLONING ELEMENTS
const navItem = document.querySelector(".nav-list li");
const clone = navItem.cloneNode(true);
clone.querySelector("a").textContent = "Cloned Link";
clone.querySelector("a").href = "#cloned";
document.querySelector(".nav-list").appendChild(clone);
console.log("Cloned a nav item");


// BUILD: FUNCTION THAT ADDS NEW NAV ITEM
function addNavItem(text, href) {
    // Create li with a.nav-link inside
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.className = "nav-link";
    a.textContent = text;
    a.href = href;
    li.appendChild(a);
    
    // Add to the nav list
    document.querySelector(".nav-list").appendChild(li);
}

addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");
console.log("Added Blog and Portfolio to nav");
//   EVENT LISTENERS 

//  BASIC EVENTS
const button = document.createElement("button");
button.textContent = "Click Me";
button.style.margin = "10px";
button.style.padding = "10px 20px";
document.body.appendChild(button);

// Adding event listeners
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Arrow function
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function (can be removed later)
function handleClick() {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener after 5 seconds as example
setTimeout(() => {
    button.removeEventListener("click", handleClick);
    console.log("Named listener removed");
}, 5000);


//  EVENT TYPES

// 1. Mouse events - using the container
const container = document.querySelector(".container");
container.addEventListener("click", () => console.log("Container clicked"));
container.addEventListener("dblclick", () => console.log("Container double clicked"));
container.addEventListener("mouseenter", () => console.log("Mouse entered container"));
container.addEventListener("mouseleave", () => console.log("Mouse left container"));
container.addEventListener("mousemove", (e) => {
    // console.log("Mouse moving:", e.clientX, e.clientY); // Commented to avoid spam
});

// 2. Keyboard events - using the name input
const nameInput = document.querySelector("#name");
nameInput.addEventListener("keydown", (e) => console.log("Key down:", e.key));
nameInput.addEventListener("keyup", (e) => console.log("Key up:", e.key));
nameInput.addEventListener("keypress", (e) => console.log("Key press:", e.key));

// 3. Form events
const form = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page refresh
    console.log("Form submitted!");
});

emailInput.addEventListener("focus", () => console.log("Email input focused"));
emailInput.addEventListener("blur", () => console.log("Email input lost focus"));
emailInput.addEventListener("input", (e) => console.log("Typing:", e.target.value));
emailInput.addEventListener("change", () => console.log("Email value changed"));

// 4. Window events
window.addEventListener("load", () => console.log("Page fully loaded"));
window.addEventListener("resize", () => console.log("Window resized"));
window.addEventListener("scroll", () => console.log("Page scrolled"));


// BUILD: CLICK COUNTER
let count = 0;

// Create elements
const counterDisplay = document.createElement("h2");
counterDisplay.textContent = `Count: ${count}`;

const btnPlus = document.createElement("button");
btnPlus.textContent = "+";
btnPlus.style.margin = "5px";

const btnMinus = document.createElement("button");
btnMinus.textContent = "-";
btnMinus.style.margin = "5px";

const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
btnReset.style.margin = "5px";

// Add to page
document.body.append(counterDisplay, btnPlus, btnMinus, btnReset);

// Event listeners
btnPlus.addEventListener("click", () => {
    count++;
    counterDisplay.textContent = `Count: ${count}`;
});

btnMinus.addEventListener("click", () => {
    if (count > 0) { // Count cannot go below 0
        count--;
    }
    counterDisplay.textContent = `Count: ${count}`;
});

btnReset.addEventListener("click", () => {
    count = 0;
    counterDisplay.textContent = `Count: ${count}`;
});

console.log("Click counter ready!");
// BUILD: Keyboard Shortcuts
document.addEventListener("keydown", function(event) {
  // 1. Ctrl+S: Show "Saved!" alert
  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }

  // 2. Escape: Clear all inputs
  if (event.key === "Escape") {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => input.value = "");
  }

  // 3. Ctrl+Enter: Submit form
  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    form.submit();
  }
// BUILD: Delegated Task List
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function() {
  if (taskInput.value.trim() === "") return;
  const li = document.createElement("li");
  li.innerHTML = `${taskInput.value} <button class="delete-btn">X</button>`;
  taskList.appendChild(li);
  taskInput.value = "";
});

taskList.addEventListener("click", function(event) {
  // 1. Click delete button
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
  
  // 2. Click the li itself
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
//  Form Handling
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time validation for Name
nameInput.addEventListener("input", function(event) {
  const value = event.target.value;
  if (value.length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
  } else {
    clearError(nameInput);
  }
});

// Real-time validation for Email
emailInput.addEventListener("input", function(event) {
  const value = event.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    showError(emailInput, "Please enter a valid email");
  } else {
    clearError(emailInput);
  }
});

// Form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  console.log("Form data:", data);

  if (isValid(data)) {
    showSuccess("Form submitted successfully!");
    form.reset();
  }
});

function showError(input, message) {
  input.classList.add("error");
  let errorEl = input.nextElementSibling;
  if (!errorEl || !errorEl.classList.contains("error-message")) {
    errorEl = document.createElement("small");
    errorEl.classList.add("error-message");
    input.parentNode.insertBefore(errorEl, input.nextSibling);
  }
  errorEl.textContent = message;
}

function clearError(input) {
  input.classList.remove("error");
  let errorEl = input.nextElementSibling;
  if (errorEl && errorEl.classList.contains("error-message")) {
    errorEl.remove();
  }
}

function isValid(data) {
  return data.name.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
}

function showSuccess(message) {
  alert(message);
}
