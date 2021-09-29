console.log("script.js");


window.onorientationchange = function() {  	window.location.reload(); };
// window.addEventListener('resize', function () { 
//     "use strict";
//     window.location.reload(); 
// });

// THIS IS ALSO IN navbar-logic.js FOR ALL OTHER PAGES
window.onresize = function() {
	if (window.innerWidth > 812) {
		location.reload();
	}
}

// ========== STICKY NAVBAR (W3SCHOOLS) ==========
//  https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When user scrolls page, execute stickyNav()
window.onscroll = () => {
	makeNavbarSticky();
};

// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

const addClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.add(classname);
    }
}

const removeClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.remove(classname);
    }
}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const makeNavbarSticky = () => {
  if (window.pageYOffset >= sticky) {
	  navbar.classList.add("sticky");
  } else {
	  navbar.classList.remove("sticky");
  }
};

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
};

const hideSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.add("hidden");
};

// ========== SHOW/HIDE SEARCH BAR ==========
// SHOW/HIDE SEARCH BAR
const showSearchBar = () => {
    addClass([defaultButton], "hidden");
    removeClass([submitButton, searchInput, closeButton], "hidden");
    searchInput.style.width = "140px";
};

const hideSearchBar = () => {
    removeClass([defaultButton], "hidden");
    addClass([submitButton, searchInput, closeButton], "hidden");
    searchInput.style.width = "0px";
};

// ========== BLUR/UN-BLUR ALL ELEMENTS EXCEPT NAVBAR ==========

// const blurElements = () => {
// 	for (let i = 0; i < searchBlurElements.length; i++) {
// 		searchBlurElements[i].classList.add("blurred");
// 	}
// };

const unBlurElements = () => {
	for (let i = 0; i < searchBlurElements.length; i++) {
		searchBlurElements[i].classList.remove("blurred");
	}
};

// ========== FILTER THROUGH SEARCH-BAR DROPDOWN LINKS BASED ON USER INPUT ==========
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
defaultButton.addEventListener("click", () => {
	showSearchBar();
	removeClass([searchDropdownContent], "hidden");
	addClass(searchBlurElements, "blurred");
});

// CLOSE SEARCH BAR
closeButton.addEventListener("click", () => {
	hideSearchBar();
    addClass([searchDropdownContent], "hidden");
	removeClass(searchBlurElements, "blurred");
});

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

// ADD active-link CLASS TO CURRENT PAGE'S LINK
const addActiveClassToCurrrent = () => {
    if (currentUrl.includes("index")) {
        addClass([homeLink], "active-link")
    } else if (currentUrl.includes("about")) {
        addClass([aboutLink], "active-link")
    } else if (
        currentUrl.includes("model") ||
        currentUrl.includes("portrait") ||
        currentUrl.includes("nature") 
    ) {
        addClass([portLink], "active-link")
    } else if (
		currentUrl.includes("products") ||
		currentUrl.includes("before-after") 
	) {
        addClass([prodLink], "active-link")
    } else if (currentUrl.includes("contact")) {
        addClass([contactLink], "active-link")
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

const backdrop = document.querySelector(".backdrop");
// ========== HEADER AND CONTENT ==========
const header = document.querySelector("#header");
const nav = document.querySelector(".nav");
const logoContainer = document.querySelector(".logo-container");
const headerContent = document.querySelector(".header-content");
const searchContainer = document.querySelector(".search-container");
const hamburger = document.querySelector(".hamburger-button");

// ========== DROPDOWN AND CONTENT ==========

// COLLECTION WILL BE USED WITH LOOP
// const dropdownButtons = document.querySelectorAll(".dropbtn");

// !!! CLASS NAME IS NOT WORKING !!! USE ID INSTEAD !!!
const portButton = document.querySelector("#navbar__portfolio");
const prodButton = document.querySelector("#navbar__products");
const dropdownPort = document.querySelector(".dropdown-content--portfolio");
const dropdownProd = document.querySelector(".dropdown-content--products");
// ARROW ICONS
const upArrowPort = document.querySelector(".up-arrow--portfolio");
const downArrowPort = document.querySelector(".down-arrow--portfolio");
const upArrowProd = document.querySelector(".up-arrow--products");
const downArrowProd = document.querySelector(".down-arrow--products");

const toggleClass = (elementsArr, classname) => {
    for (el of elementsArr) {
        el.classList.toggle(classname);
    }
}

const showElements = (...elements) => {
    for (el of elements) {
        el.classList.remove("hidden");
    }
}

const hideElements = (...elements) => {
    for (el of elements) {
        el.classList.add("hidden");
    }
}


// DYNAMIC UP/DOWN ARROW ICONS 
const setProdArrows = () => {
    if (downArrowProd.classList.contains("hidden")) {
        showElements(downArrowProd);
        hideElements(upArrowProd);
    } 
}

const setPortArrows = () => {
    if (downArrowPort.classList.contains("hidden")) {
        showElements(downArrowPort);
        hideElements(upArrowPort)
    }
}

if (window.innerWidth < 813) {
	console.log("small screen");

  	portButton.addEventListener("click", () => {
		hideElements(dropdownProd);
		toggleClass([dropdownPort, downArrowPort, upArrowPort], "hidden");
		setProdArrows();
  	})

  	prodButton.addEventListener("click", () => {
		hideElements(dropdownPort);		
		toggleClass([dropdownProd, downArrowProd, upArrowProd], "hidden");
		setPortArrows();
  	})

  	// 1. EXPAND NAVBAR CONTENT
  	// 2. RESET DROPDOWN CONTENT: COLLAPSE AND HIDE UP ARROW 
  	// 3. RESET ARROWS: SHOW DOWN ARROW
  	hamburger.addEventListener("click", () => {
		// toggleClass([nav, headerContent, logoContainer], "expand");
		toggleClass([nav, headerContent, logoContainer, backdrop], "expand");
		hideElements(dropdownPort, dropdownProd, upArrowProd, upArrowPort);
		showElements(downArrowProd, downArrowPort);
		backdrop.classList.remove("hidden");
	});

  // !!! PREVENT CSS ANIMATION IN .header FROM RUNNING WHEN PAGE LOADS !!!

//   setTimeout(function () {
// 	backdrop.classList.remove("hidden");
// }, 300);


  setTimeout(function () {
		// header.classList.remove("preload");
		// backdrop.className = "";
		// backdrop.classList.remove("preload");
		removeClass([header, backdrop], "preload");
  }, 500);

  // ADD LISTENER TO ALL PAGE-LINKS AND COLLAPSE NAVBAR WHEN CLICKED
const pageLinks = document.querySelectorAll(".page-link");
// !!! forEach WILL TRIGGER LISTENER ON PARENT ELEMENT, USE for/for of LOOP !!!
for (link of pageLinks) {
    link.addEventListener("click", () => {
        // console.log("page-link clicked");
		// !!! THIS CAUSES CONTENT TO DISAPPEAR BEFORE NAV BACKGROUND IN NAVBAR-LOGIC.JS !!! 
        toggleClass([nav, headerContent], "expand");
		removeClass([logoContainer, backdrop], "expand");
    });
}

} else {
	console.log("large screen");
}



// !!!!! PARALLAX HAS TO BE UP TOP !!!!!
// PARALLAX IS NOW DONE WITH parallax.js

// ============================================================================

// ========== ANIMATE "photography" IN TITLE DIV ==========

const enzeeLetters = document.getElementsByClassName("enzee__letter");
const photoLetters = document.getElementsByClassName("photography__letter");

window.addEventListener("load", function () {
	// console.log("page is loaded");
	// console.log(letters);
	fadeInSequence(enzeeLetters);
	fadeInSequence(photoLetters);
});

const fadeInSequence = (arr) => {
	// const photoLetters = arr;
	// INITIAL DELAY TO GET AROUND EXPANDING NAVBAR ANIMATION BUG WHEN PAGE LOADS
	// SEE LINE 73
	let delay = 0;
	for (let i = 0; i < arr.length; i++) {
		// letters[i].classList.add("hidden");
		setTimeout(() => {
		arr[i].classList.remove("opacityZero");
		arr[i].style.display = "inline-block";
		// arr[i].classList.add("flash-fadein");
		}, delay);
		delay += 60;
	}
	// ADD flash-fadein TO photography ONLY
	if (arr.length > 5) {
		let delay = -160;
		// let delay = 200;
		for (let i = 0; i < arr.length; i++) {
		// letters[i].classList.add("hidden");
		setTimeout(() => {
			arr[i].classList.remove("opacityZero");
			arr[i].style.display = "inline-block";
			arr[i].classList.add("flash-fadein");
		}, delay);
		delay += 40;
		}
	}
};
