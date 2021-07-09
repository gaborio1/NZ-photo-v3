
// !!!!! PARALLAX HAS TO BE UP TOP !!!!!
// PARALLAX IS NOW DONE WITH parallax.js
 
 // ========== STICKY NAVBAR (W3SCHOOLS) ========== 
//  https://www.w3schools.com/howto/howto_js_navbar_sticky.asp

// When user scrolls page, execute stickyNav()
window.onscroll = () => {
  stickyNav()
};

// Get the navbar
const navbar = document.getElementById("header");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
const stickyNav = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

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


// ========== ACTIVE NAV-LINK BORDER BOTTOM ==========

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

// ========== ANIMATE "photography" IN TITLE DIV

const letters = document.getElementsByClassName("photography__letter");

window.addEventListener("load", function() {
  console.log("page is loaded");
  console.log(letters);
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



// !!!!!!!!!!!!!!!!!!!!! LOOK INTO THIS AS GALLERIES ARE DONE WITH PORTFOLIO.JS !!!!!!!!!!!!!!!!!!!!!

// CATEGORY GALLERY

// const imagesTest = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

// const galleryContainer = document.querySelector(".gallery-container");

// // const createDivs = () => {
// //   for(let index of imagesTest) {
// //     console.log("hello");
// //     const imgDiv = document.createElement("div");
// //     imgDiv.className = "portrait-img-container";
// //     // imgDiv.innerText = index;
// //     // imgDiv.style.backgroundImage = "url("`./images/portrait/portrait-${index}`")"
// //     imgDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)"
// //     galleryContainer.appendChild(imgDiv);
// //   }
// // }


// const createGalleryDivs = () => {
//   for(let index of imagesTest) {
//     // console.log("hello");
//     const galleryDiv = document.createElement("div");
//     galleryDiv.className = "column";
//     // imgDiv.innerText = index;
//     // imgDiv.style.backgroundImage = "url("`./images/portrait/portrait-${index}`")"
//     // imgDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)"
//     galleryContainer.appendChild(galleryDiv);

//     const galleryDivImg = document.createElement("img");
//     galleryDivImg.src = "url(../images/portrait/portrait-" + index + ".jpg)"
//     galleryDiv.appendChild(galleryDivImg);
//   }
// }

// createGalleryDivs();

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!V!!!!!!!!!!!!!!!!!!!!!
