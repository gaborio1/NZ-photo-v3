
// !!!!! PARALLAX HAS TO BE UP TOP !!!!!
// PARALLAX IS NOW DONE WITH parallax.js
 
 // ========== STICKY NAVBAR (W3SCHOOLS) ========== 
//  https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When user scrolls page, execute stickyNav()
window.onscroll = () => {makeNavbarSticky()};

// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const makeNavbarSticky = () => {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
		} else {
		navbar.classList.remove("sticky");
		}
}


// ==================== SEARCH BAR ====================

const defaultButton = document.getElementById("default-btn");
const submitButton = document.getElementById("submit-btn");
const closeButton = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const searchDropdownContent = document.getElementById("search-dropdown-content");
const searchDropdownLinks = searchDropdownContent.getElementsByTagName("a");
// imageContainer, mainContent AND footer (ALL ELEMENTS EXCEPT NAVBAR)
const searchBlurElements = document.getElementsByClassName("search-blur");

// ========== SHOW/HIDE SEARCH DROPDOWN CONTENT ==========
const showSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.remove("hidden");
}

const hideSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.add("hidden");
}

// ========== SHOW/HIDE SEARCH BAR ==========
const showSearchBar = () => {
  defaultButton.classList.add("hidden");
	submitButton.classList.remove("hidden");
	searchInput.classList.remove("hidden");
	closeButton.classList.remove("hidden");
	searchInput.style.width = "140px";
}

const hideSearchBar = () => {
  defaultButton.classList.remove("hidden");
	submitButton.classList.add("hidden");
	searchInput.classList.add("hidden");
	closeButton.classList.add("hidden");
	searchInput.style.width = "0px";
}

// ========== BLUR/UN-BLUR ALL ELEMENTS EXCEPT NAVBAR ==========
const blurElements = () => {
  for (let i = 0; i < searchBlurElements.length; i++) {
	searchBlurElements[i].classList.add("blurred");
  }
}

const unBlurElements = () => {
  for (let i = 0; i < searchBlurElements.length; i++) {
	searchBlurElements[i].classList.remove("blurred");
  }
}

// ========== FILTER THROUGH SEARCH-BAR DROPDOWN LINKS BASED ON USER INPUT ==========
// (W3SCHOOLS) https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
const filterFunction = () => {
  const filter = searchInput.value.toUpperCase();
  for (let i = 0; i < searchDropdownLinks.length; i++) {
	txtValue = searchDropdownLinks[i].textContent || searchDropdownLinks[i].innerText;
	if (txtValue.toUpperCase().indexOf(filter) > -1) {
	  searchDropdownLinks[i].style.display = "";
	} else {
	  searchDropdownLinks[i].style.display = "none";
	}
  }
}

// OPEN SEARCH BAR
defaultButton.addEventListener("click", function() {
	showSearchBar();
	showSearchDropdown();
	blurElements();
})

// CLOSE SEARCH BAR
closeButton.addEventListener("click", function() {
	hideSearchBar();
	hideSearchDropdown();
	unBlurElements();
})

searchInput.addEventListener("keyup", filterFunction);

// ========== ACTIVE NAVLINKS HIGHLIGHT/BORDER BOTTOM ==========

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
// GRAB NAVBAR LINKS
const homeLink = document.getElementById("navbar__home");
const aboutLink = document.getElementById("navbar__about");
const portfolioLink = document.getElementById("navbar__portfolio");
const productsLink = document.getElementById("navbar__products");
const contactLink = document.getElementById("navbar__contact");

// ADD active-link CLASS TO LINK
const addActiveClass = (el) => {
  el.classList.add("active-link");
}
// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
	if (currentUrl.includes("index")) {
		addActiveClass(homeLink);
	} else if (currentUrl.includes("about")) {
		addActiveClass(aboutLink);
	} else if (currentUrl.includes("model")
		|| currentUrl.includes("portrait") 
		|| currentUrl.includes("nature")
		|| currentUrl.includes("lightbox21")
	 ) {
		addActiveClass(portfolioLink);
	} else if (currentUrl.includes("products")) {
		addActiveClass(productsLink);
		} else if (currentUrl.includes("contact")) {
		addActiveClass(contactLink);
	} else {
		console.log("page not found");
	}
}

addActiveClassToCurrrent();

// ========== ANIMATE "photography" IN TITLE DIV ==========

const letters = document.getElementsByClassName("photography__letter");

window.addEventListener("load", function() {
  // console.log("page is loaded");
  // console.log(letters);
  fadeInSequence(letters);
});

const fadeInSequence = (arr) => {
  const letters = arr;
  let delay = 50;
  for (let i = 0; i < letters.length; i++) {
	  // letters[i].classList.add("hidden");
	  setTimeout(() => {
		  letters[i].classList.remove("hidden");
		  letters[i].classList.add("flash-fadein");
		  letters[i].style.display = "inline-block";
	  }, delay)
	  delay+=75;
  }
}

