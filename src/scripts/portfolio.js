// ========== STICKY NAVBAR W3SCHOOLS ==========

window.onscroll = function() {myFunction()};
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

// ========== ACTIVE NAVLINKS HIGHLIGHT/BORDER BOTTOM ==========

// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
// GRAB NAVBAR LINKS
const homeLink = document.getElementById("navbar__home");
const aboutLink = document.getElementById("navbar__about");
const portfolioLink = document.getElementById("navbar__portfolio");
const productsLink = document.getElementById("navbar__products");
const contactLink = document.getElementById("navbar__contact");

const addActiveClass = (el) => {
  el.classList.add("active-link");
}
// ADD active-link CLASS TO CURRENT PAGE
if (currentUrl.includes("index")) {
  addActiveClass(homeLink);
} else if (currentUrl.includes("about")) {
  addActiveClass(aboutLink);
} else if (currentUrl.includes("model")
  || currentUrl.includes("portrait") 
  || currentUrl.includes("nature")
 ) {
  addActiveClass(portfolioLink);
} else if (currentUrl.includes("products")) {
  addActiveClass(productsLink);
  } else if (currentUrl.includes("contact")) {
  addActiveClass(contactLink);
} else {
  console.log("page not found");
}


// ==================== DYNAMIC MODAL BASED ON W3SCHOOLS: https://www.w3schools.com/howto/howto_js_lightbox.asp ====================

// OPEN MODAL
const openModal = () => {
  document.getElementById("modal").style.display = "flex";
}

// CLOSE MODAL
const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.classList.add("fade-out");
  // FADE OUT AND HIDE WHEN TRANSPARENT
  setTimeout(function () {
    modal.classList.remove("fade-out");
        modal.style.display = "none";

      }, 950);
}

//   SLIDE INDEX
let slideIndex = 1;

// NEXT / PREV ARROWS
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const currentSlide = (n) => {
  showSlides(slideIndex = n);

  // !!!!! TEMPORARY FIX FOR imageCounterDivs.textContent: !!!!!
  const imageCounterDivs = document.getElementsByClassName("image-counter-div");
  trimmedString = "";
  for (let i = 0; i < imageCounterDivs.length; i++) {
    // console.log(imageCounterDivs[i].textContent.substring(0,4));
    // 1 / 4444444  => 1 /
    trimmedString = imageCounterDivs[i].textContent.substring(0,4);
    // 1 /   + NUMBER OF GALLERY IMAGES  => 1 / 4
    imageCounterDivs[i].textContent = trimmedString.concat(numberOfFoundImages);

  }
}


//  RETREIVE IMAGE FOLDER NAME AND IMAGE NAME FROM CATEGORY TITLE
const getCategoryName = () => {
  return document.querySelector(".category-title").innerHTML;
}


// ========== CATEGORY GALLERY ==========

// CREATE GALLERY DIVS WITH IMAGES
const galleryImgContainer = document.querySelector(".gallery-img-container");

const createGallery = (n) => {
  const galleryDiv = document.createElement("div");
  galleryDiv.className = "gallery-div";
  galleryImgContainer.appendChild(galleryDiv);

  const galleryDivImg = document.createElement("img");
  galleryDivImg.className = ("hover-shadow");
  galleryDivImg.src = `../images/${getCategoryName()}/${getCategoryName()}-${n}.jpg`;

  galleryDivImg.onerror = function () {
    console.log('error loading ' + this.src);
    // !!!!! HAVE TO REMOVE PARENT (CONTAINER DIV) !!!!!
    this.parentElement.remove();
    // this.style.display = "none";
    // this.className = "invalid-img-source";
    // this.remove();
    // place your error.png image instead
    // this.src = 'error.png'; 
    };
   galleryDiv.appendChild(galleryDivImg);
}



// ========== ADD openModal() and currentSlide(n) TO GALLERY IMAGES (<img src="../images/nature-1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">) ==========
const addListenerGalleryImg = () => {
  const galleryImages = document.getElementsByClassName("hover-shadow");

  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", openModal, false);
    // !!!!! NO NEED FOR THIS: !!!!!
    // galleryImages[i].addEventListener("click", getNumberOfImages, false);
    galleryImages[i].addEventListener('click', function(index) { 
      return function () {
        currentSlide(Number(index + 1));
      };
    }(i), true);
  }
}

// ========== CREATE MODAL DIVS WITH IMAGE-COUNTER AND IMAGES ==========


// !!!!!!!!!!!!!!!!!!!!!!!!!! THIS IS WORKING IN CONSOLE BUT IN createModal ITS RETURN VALUE IS undefined !!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// COUNT NUMBER OF FOUND GALLERY IMAGES/DIVS IN GALLERY
// CALLED IN currentSlide() AFTER GALLERY IMAGES HAVE BEEN RENDERED

let numberOfFoundImages = 0;
console.log("initial value: " + numberOfFoundImages);
const getNumberOfImages = () => {
  console.log("gallery clicked");
  const galleryDivs = document.getElementsByClassName("gallery-div");
  // !!!!!!!! THIS IS TOTAL IMAGES COUNT FOR NUMBERTEXT DISPLAY, NOT WORKING IN createModal() !!!!!!!!!!
  numberOfFoundImages = galleryDivs.length;
  console.log("FOUND IMAGES: " + numberOfFoundImages);
  return numberOfFoundImages;
}

// GET IMAGE COUNT AFTER PAGE IS LOADED
window.onload = getNumberOfImages;

const createModal = (n) => {
  const modalImgContainer = document.querySelector(".modal-img-container");

  const modalDiv = document.createElement("div");
  modalDiv.className = "modal-img-div";
  modalImgContainer.appendChild(modalDiv);

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const imageCounterDiv = document.createElement("div");
  imageCounterDiv.className = ("image-counter-div");
  // !!!!! THESE DON'T WORK !!!!!
  // imageCounterDiv.textContent = index + " / " + numberOfFoundImages;
  // imageCounterDiv.textContent = n + " / " + numberOfFoundImages;

  // !!!!! TEMPORARY FIX: CONCAT NUMBER OF GALLERY IMAGES TO END OF STRING IN currentSlide() !!!!!
  imageCounterDiv.textContent = n + " / ";
  modalDiv.appendChild(imageCounterDiv);
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const modalDivImg = document.createElement("img");
  modalDivImg.className = ("modal-img");
  modalDivImg.src = `../images/${getCategoryName()}/${getCategoryName()}-${n}.jpg`;

  modalDivImg.onerror = function () {
    console.log('error loading ' + this.src);
    this.style.display = "none";
    // !!!!! HAVE TO REMOVE PARENT (CONTAINER DIV) !!!!!
    this.parentElement.remove();
    // this.remove();
    // place your error.png image instead
    // this.src = 'error.png'; 
  };
  modalDiv.appendChild(modalDivImg);
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ========== CREATE THUMBNAIL DIVS WITH IMAGES ==========
const createThumbnail = (n) => {
  const thumbnailContainer = document.querySelector(".thumbnail-container");
    
    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "thumbnail-div";
    thumbnailContainer.appendChild(thumbnailDiv);
  
    const thumbnailDivImg = document.createElement("img");
    thumbnailDivImg.className = ("thumbnail-image");
    thumbnailDivImg.src = `../images/${getCategoryName()}/${getCategoryName()}-${n}.jpg`;
   
    thumbnailDivImg.onerror = function () {
      console.log('error loading ' + this.src);
      // this.style.display = "none";
      this.parentElement.remove();
      // this.className = "invalid-img-source";
      // this.remove();
      // place your error.png image instead
      // this.src = 'error.png'; 
  };
  thumbnailDiv.appendChild(thumbnailDivImg);
}


// ========== ADD currentslide(n) TO THUMBNAIL IMAGES ==========
function addListenerThumbnailImg(){
  const thumbnailImages = document.getElementsByClassName("thumbnail-image");
  
  for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].addEventListener('click', function(index) { 
      return function () {
        currentSlide(Number(index + 1));
      };
    }(i), true);
  }
}

//  ========== LOOP WILL CHECK FOR maxIndex NUMBER OF IMAGES IN FOLDER ==========
let index = 1;
const maxIndex = 9;
while (index < maxIndex + 1) {
  console.log(index);
  createGallery(index);
  createModal(index);
  createThumbnail(index);
  index++;
}

const showSlides = (n) => {
  let i;
  const modalImageDivs = document.getElementsByClassName("modal-img-div");
  const thumbnailImages = document.getElementsByClassName("thumbnail-image");
  // var captionText = document.getElementById("caption");
  if (n > modalImageDivs.length) {slideIndex = 1}
  if (n < 1) {slideIndex = modalImageDivs.length}
  for (i = 0; i < modalImageDivs.length; i++) {
    modalImageDivs[i].style.display = "none";
  }
  for (i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].className = thumbnailImages[i].className.replace(" active", "");
  }
  modalImageDivs[slideIndex-1].style.display = "block";
  thumbnailImages[slideIndex-1].className += " active";
  // captionText.innerHTML = dots[slideIndex-1].alt;
}

showSlides(slideIndex);
addListenerGalleryImg();
addListenerThumbnailImg();


// window.onload = getNumberOfImages;

// !!!!!!!!!! THESE DONT WORK IN CREATEDIV LOOPS !!!!!!!!!!

//   thumbnailDivImg.onclick = currentSlide(Number(index));
//   thumbnailDivImg.addEventListener("click", currentSlide(Number(index)));

// !!!!!!!!!! SOLUTION !!!!!!!!!!

// How to properly pass argument in loop to multiple event handlers? CREATE A CLOSURE
// https://stackoverflow.com/questions/12330607/how-to-properly-pass-argument-in-loop-to-multiple-event-handlers

// eventName: String that specifies the name of the event to listen for. This parameter is case sensitive!
// function: Represents the event listener function to be called when the event occurs. When an event occurs, an event object is initialized and passed to the event handler as the first parameter. The type of the event object depends on the current event.
// useCapture: Boolean that specifies whether the event needs to be captured or not. One of the following values:

// false -> Register the event handler for the bubbling phase. 
// true -> Register the event handler for the capturing phase.
// Bubbling and Capturing Phases:

// bubbling: the event object propagates through the target's ancestors in reverse order, starting with the target's parent and ending with the defaultView. This phase is also known as the bubbling phase. Event listeners registered for this phase must handle the event after it has reached its target.

// capturing: the event object must propagate through the target's ancestors from the defaultView to the target's parent. This phase is also known as the capturing phase. Event listeners registered for this phase must handle the event before it reaches its target.


// ========== ADD openModal() and currentSlide(n) TO GALLERY IMAGES (<img src="../images/nature-1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">) ==========
// const addListenerGalleryImg = () => {
//   const galleryImages = document.getElementsByClassName("hover-shadow");

//   for (let i = 0; i < galleryImages.length; i++) {
//     galleryImages[i].addEventListener("click", openModal, false);
//     galleryImages[i].addEventListener('click', function(index) { 
//       return function () {
//         currentSlide(Number(index + 1));
//       };
//     }(i), true);
//   }
// }

// addListenerGalleryImg();


// GET CURRENT URL OF PAGE
const currentUrl = window.location.href;
console.log(window.location.href);
// GET NAVBAR LINKS
const homeLink = document.getElementById("navbar__home");
const aboutLink = document.getElementById("navbar__about");
const portfolioLink = document.getElementById("navbar__portfolio");
const productsLink = document.getElementById("navbar__products");
const contactLink = document.getElementById("navbar__contact");
// ADD active-link CLASS TO CURRENT PAGE
if (currentUrl.includes("index")) {
  // console.log("index");
  homeLink.classList.add("active-link");
  // homeLink.style.color = "orange";
} else if (currentUrl.includes("about")) {
  // console.log("about");
  // aboutLink.style.color = "orange";
  aboutLink.classList.add("active-link");
} else if (currentUrl.includes("model")
 || currentUrl.includes("portrait") 
 || currentUrl.includes("nature")
 || currentUrl.includes("lightbox")
 ) {
  console.log("portfolio link!")
  portfolioLink.classList.add("active-link");
  // portfolioLink.style.color = "orange";
} else if (currentUrl.includes("products")) {
  productsLink.classList.add("active-link");
  // productsLink.style.color = "orange";
} else if (currentUrl.includes("contact")) {
  contactLink.classList.add("active-link");
  // contactLink.style.color = "orange";
}

