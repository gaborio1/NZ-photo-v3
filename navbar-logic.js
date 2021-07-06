console.log('HELLO FROM NAVBAR LOGIC JS');

// STICKY NAVBAR W3SCHOOLS

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// NOT IN USE:

// FADE IN/OUT GALLERY
// let current = 0,
// slides = document.querySelector(".mySlides");

// setInterval(function() {
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.opacity = 0;
//   }
//   current = (current != slides.length - 1) ? current + 1 : 0;
//   slides[current].style.opacity = 1;
// }, 2000);


// ========== SEARCH BAR ==========

const defaultButton = document.getElementById("default-btn");
const submitButton = document.getElementById("submit-btn");
const closeButton = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");
const searchDropdownContent = document.getElementById("search-dropdown-content");
const searchDropdownLinks = searchDropdownContent.getElementsByTagName("a");
// imageContainer, mainContent AND footer (ALL ELEMENTS EXCEPT NAVBAR)
const searchBlurElements = document.getElementsByClassName("search-blur");

// SHOW/HIDE SEARCH DROPDOWN CONTENT
const showSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.remove("hidden");
}

const hideSearchDropdown = () => {
  document.getElementById("search-dropdown-content").classList.add("hidden");
}

// SHOW/HIDE SEARCH BAR
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

// BLUR/UN-BLUR ALL ELEMENTS EXCEPT NAVBAR
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

// FILTER THROUGH SEARCH-BAR DROPDOWN LINKS BASED ON USER INPUT
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

// ACTIVE NAV-LINK

// Add active class to the current button (highlight it)
// var header = document.getElementById("myDIV");
var btns = document.getElementsByClassName("select-able");
for (var i = 0; i < btns.length; i++) {
  console.log(btns[i]);
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}