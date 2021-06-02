
// PARALLAX 
// !!!!! HAS TO BE UP TOP !!!!!

// let controller = new ScrollMagic.Controller();
// let timeline = new TimelineMax();

// timeline.to(".test", 3, { x: 300 }); 
// timeline.to(".mountain-crop-1", 5, { y: -200 })
// .to(".mountain-crop-2", 5, { y: -150 }, "-=5")
// .to(".mountain-crop-3", 5, { y: -110 }, "-=5")
// .to(".mountain-crop-4", 5, { y: -50 }, "-=5") 
// .to(".mountain-crop-5", 5, { y: -20 }, "-=5")
// .to(".mountain-full", 5, { y: 10 }, "-=5")
// .to(".title-div", 5, { y: -250 }, "-=5")
// .to(".main-content", 15, { top: "0%" }, "-=9");
// // .to(".main-content", 5, { y: -500 }, "-=5");

 
// let scene = new ScrollMagic.Scene({
//   triggerElement: ".image-container",
//   duration: "200%",
//   triggerHook: 0,
// })
//   .setTween(timeline)
//   .setPin(".image-container")
//   .addTo(controller);
 
 
 
 
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

// ANIMATE "photography" IN TITLE DIV

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





// CATEGORY GALLERY

const imagesTest = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const galleryContainer = document.querySelector(".gallery-container");

// const createDivs = () => {
//   for(let index of imagesTest) {
//     console.log("hello");
//     const imgDiv = document.createElement("div");
//     imgDiv.className = "portrait-img-container";
//     // imgDiv.innerText = index;
//     // imgDiv.style.backgroundImage = "url("`./images/portrait/portrait-${index}`")"
//     imgDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)"
//     galleryContainer.appendChild(imgDiv);
//   }
// }


const createGalleryDivs = () => {
  for(let index of imagesTest) {
    // console.log("hello");
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "column";
    // imgDiv.innerText = index;
    // imgDiv.style.backgroundImage = "url("`./images/portrait/portrait-${index}`")"
    // imgDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)"
    galleryContainer.appendChild(galleryDiv);

    const galleryDivImg = document.createElement("img");
    galleryDivImg.src = "url(../images/portrait/portrait-" + index + ".jpg)"
    galleryDiv.appendChild(galleryDivImg);
  }
}

createGalleryDivs();
