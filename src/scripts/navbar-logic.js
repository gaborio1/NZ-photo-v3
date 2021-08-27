console.log("navbar-logic.js");
// STICKY NAVBAR W3SCHOOLS

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
    makeNavbarSticky();
};

// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const makeNavbarSticky = () => {
  if (window.pageYOffset >= sticky) {
    // console.log("onscroll");
    navbar.classList.add("sticky");
  } else {
    // console.log("onscroll");
    navbar.classList.remove("sticky");
  }
};

// ========== SEARCH BAR ==========

const defaultButton = document.getElementById("default-btn");
const submitButton = document.getElementById("submit-btn");
const closeButton = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const searchDropdownContent = document.getElementById(
  "search-dropdown-content"
);
const searchDropdownLinks = searchDropdownContent.getElementsByTagName("a");
// imageContainer, mainContent AND footer (ALL ELEMENTS EXCEPT NAVBAR)
const searchBlurElements = document.getElementsByClassName("search-blur");

// SHOW/HIDE SEARCH DROPDOWN CONTENT
const showSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.remove("hidden");
};

const hideSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.add("hidden");
};

// SHOW/HIDE SEARCH BAR
const showSearchBar = () => {
  defaultButton.classList.add("hidden");
  submitButton.classList.remove("hidden");
  searchInput.classList.remove("hidden");
  closeButton.classList.remove("hidden");
  searchInput.style.width = "140px";
};

const hideSearchBar = () => {
  defaultButton.classList.remove("hidden");
  submitButton.classList.add("hidden");
  searchInput.classList.add("hidden");
  closeButton.classList.add("hidden");
  searchInput.style.width = "0px";
};

// BLUR/UN-BLUR ALL ELEMENTS EXCEPT NAVBAR
const blurElements = () => {
  for (let i = 0; i < searchBlurElements.length; i++) {
    searchBlurElements[i].classList.add("blurred");
  }
};

const unBlurElements = () => {
  for (let i = 0; i < searchBlurElements.length; i++) {
    searchBlurElements[i].classList.remove("blurred");
  }
};

// FILTER THROUGH SEARCH-BAR DROPDOWN LINKS BASED ON USER INPUT
// (W3SCHOOLS) https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
const filterFunction = () => {
  const filter = searchInput.value.toUpperCase();
  for (let i = 0; i < searchDropdownLinks.length; i++) {
    txtValue =
      searchDropdownLinks[i].textContent || searchDropdownLinks[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      searchDropdownLinks[i].style.display = "";
    } else {
      searchDropdownLinks[i].style.display = "none";
    }
  }
};

// OPEN SEARCH BAR
defaultButton.addEventListener("click", function () {
    showSearchBar();
    showSearchDropdown();
    blurElements();
});

// CLOSE SEARCH BAR
closeButton.addEventListener("click", function () {
    hideSearchBar();
    hideSearchDropdown();
    unBlurElements();
});

searchInput.addEventListener("keyup", filterFunction);

// ========== ACTIVE NAVLINKS HIGHLIGHT/BORDER BOTTOM ==========

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
console.log(currentUrl);
// GRAB NAVBAR LINKS
const homeLink = document.getElementById("navbar__home");
const aboutLink = document.getElementById("navbar__about");
const portfolioLink = document.getElementById("navbar__portfolio");
const productsLink = document.getElementById("navbar__products");
const contactLink = document.getElementById("navbar__contact");

// ADD active-link CLASS TO LINK
const addActiveClass = (el) => {
  el.classList.add("active-link");
};
// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
  if (currentUrl.includes("index")) {
    addActiveClass(homeLink);
  } else if (currentUrl.includes("about")) {
    addActiveClass(aboutLink);
  } else if (
    currentUrl.includes("model") ||
    currentUrl.includes("portrait") ||
    currentUrl.includes("nature") ||
    currentUrl.includes("lightbox21")
  ) {
    addActiveClass(portfolioLink);
  } else if (currentUrl.includes("products")) {
    addActiveClass(productsLink);
  } else if (currentUrl.includes("contact")) {
    addActiveClass(contactLink);
  } else {
    console.log("page not found");
  }
};

addActiveClassToCurrrent();

// =============================== SMALL SCREEN ===============================

// https://stackoverflow.com/questions/41868060/how-to-run-some-javascript-code-only-on-small-screen-mobile-devices
// WORKS WITH CHROME DEVICE TOOLBAR
// function detectmob() {
//   if (
//     navigator.userAgent.match(/Android/i) ||
//     navigator.userAgent.match(/webOS/i) ||
//     navigator.userAgent.match(/iPhone/i) ||
//     navigator.userAgent.match(/iPad/i) ||
//     navigator.userAgent.match(/iPod/i) ||
//     navigator.userAgent.match(/BlackBerry/i) ||
//     navigator.userAgent.match(/Windows Phone/i)
//   ) {
//     console.log("mobile or tablet size");
//     // return true;
//   } else {
//     console.log("laptop or larger size");
//     // return false;
//   }
// }

// detectmob();
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
const logoContainer = document.querySelector(".logo-container");
const headerContent = document.querySelector(".header-content");
const searchContainer = document.querySelector(".search-container");
const hamburger = document.querySelector(".hamburger-button");
// const searchButton = document.querySelector(".default-btn");

if (window.innerWidth < 767) {
  console.log("small screen");
  // nav.classList.add("hidden");
  // !!! classList.add("hidden") NOT WORKING ON CONTAINER !!!
  // searchContainer.classList.add("hidden");

  // !!!!! INSTEAD: !!!!!
  // https://stackoverflow.com/questions/462537/overriding-important-style
  // searchContainer.style.setProperty("display", "inline", "important");

  // OR, HIDE MAGNIFIER BUTTON ONLY
  // searchButton.classList.add("hidden");

  // hamburger.addEventListener("click", () => {
  //   console.log("hamburger clicked");
  //   nav.classList.toggle("hidden");
  // });
} else {
  console.log("large screen");
  // nav.classList.remove("hidden");
  // hamburger.classList.add("hidden");
}

hamburger.addEventListener("click", () => {
  console.log("hamburger clicked");
  nav.classList.toggle("expand");
  headerContent.classList.toggle("expand");
  logoContainer.classList.toggle("expand");

  // TOGGLE VISIBILITY OF LOGO
  // if (logoContainer.style.display === "none") {
  //   logoContainer.style.display = "block";
  // } else {
  //   logoContainer.style.display = "none";
  // }
});

// !!! PREVENT CSS ANIMATION IN .header FROM RUNNING WHEN PAGE LOADS !!!
setTimeout(function () {
  // document.body.className = "";
  header.className = "";
}, 500);

// NOT WORKING AS INTENDED:
// window.onload = () => {
//   headerContent.style.animation = "none";
//   console.log("onload");
//   setTimeout(function () {
//     headerContent.style.animation = "collapseHeight ease 0.5s";
//   }, 1000);
// };

// ADD LISTENER TO ALL PAGE-LINKS AND COLLAPSE NAVBAR WHEN CLICKED
const pageLinks = document.querySelectorAll(".page-link");
// !!! forEach WILL TRIGGER LISTENER ON PARENT ELEMENT, USE for/for of LOOP !!!
for (link of pageLinks) {
  link.addEventListener("click", () => {
    console.log("page-link clicked");
    // headerContent.classList.remove("expand");
    // nav.classList.remove("expand");
    nav.classList.toggle("expand");
    headerContent.classList.toggle("expand");
    logoContainer.classList.remove("expand");
    // TOGGLE VISIBILITY OF LOGO
    // if (logoContainer.style.display === "none") {
    //   logoContainer.style.display = "block";
    // } else {
    //   logoContainer.style.display = "none";
    // }
  });
}
