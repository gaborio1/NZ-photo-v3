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


// SEARCH BAR

const defaultButton = document.getElementById("default-btn");
const submitButton = document.getElementById("submit-btn");
const closeButton = document.getElementById("close-btn");
const searchInput = document.getElementById("search-input");

const imageContainer = document.getElementById("image-container");

defaultButton.addEventListener("click", function() {
    defaultButton.classList.add("hidden");
    submitButton.classList.remove("hidden");
    searchInput.classList.remove("hidden");
    // searchInput.focus();
    closeButton.classList.remove("hidden");
    imageContainer.classList.add("blurred");

    searchInput.style.width = "140px";
})

closeButton.addEventListener("click", function() {
    defaultButton.classList.remove("hidden");
    submitButton.classList.add("hidden");
    searchInput.classList.add("hidden");
    closeButton.classList.add("hidden");
    imageContainer.classList.remove("blurred");
    
    searchInput.style.width = "0px";
})

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