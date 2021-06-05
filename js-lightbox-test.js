// STICKY NAVBAR W3SCHOOLS

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
const btns = document.getElementsByClassName("select-able");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



// CATEGORY GALLERY

const imagesTest = ["1", "2", "3", "4", "5", "6", "7", "8", "9"
// , "10", "11", "12"
];

// ORIGINAL LAYOUT WJITHOUT LIGHTBOX:

// const galleryContainer = document.querySelector(".gallery-container");
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
// createDivs()


// CREATE GALLERY DIVS WITH IMAGES
const galleryContainerRow = document.querySelector(".row");

const createGalleryDivs = () => {
  for(let index of imagesTest) {
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "column";
    galleryContainerRow.appendChild(galleryDiv);

    const galleryDivImg = document.createElement("img");
    galleryDivImg.className = ("hover-shadow");
    galleryDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
   
    galleryDiv.appendChild(galleryDivImg);
  }
}

createGalleryDivs();

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


// ADD openModal() and currentSlide(n) TO GALLERY IMAGES (<img src="../images/nature-1.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">)
function addListenerGalleryImg(){
  const galleryImages = document.getElementsByClassName("hover-shadow");

  for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", openModal, false);
    galleryImages[i].addEventListener('click', function(index) { 
      return function () {
        currentSlide(Number(index + 1));
      };
    }(i), true);
  }
}

addListenerGalleryImg();



// CREATE MODAL DIVS WITH NUMBERTEXT AND IMAGES
// const modalContent = document.querySelector(".modal-content");
const modalImgContainer = document.querySelector(".modal-img-container");

const createModalDivs = () => {
    for(let index of imagesTest) {
      const modalDiv = document.createElement("div");
      modalDiv.className = "mySlides";
      // modalContent.appendChild(modalDiv);
      modalImgContainer.appendChild(modalDiv);

      const numberText = document.createElement("div");
      numberText.className = ("numbertext");
      numberText.textContent = index + " / " + imagesTest.length;
      modalDiv.appendChild(numberText);
  
      const modalDivImg = document.createElement("img");
      modalDivImg.className = ("modal-img");
      modalDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
  
      modalDiv.appendChild(modalDivImg);
    }
  }

  createModalDivs();


// TEST

// const hello = (idx) => {
//     console.log("hello " + idx);
//     console.log(typeof(Number(idx)));
// }

// CREATE THUMBNAIL DIVS WITH IMAGES
const createThumbnailDivs = () => {
    const thumbnailContainer = document.querySelector(".thumbnail-container");
    // thumbnailContainer.className = ("thumbnail-container");
    // modalContent.appendChild(thumbnailContainer);

    for(let index of imagesTest) {
      const thumbnailDiv = document.createElement("div");
      thumbnailDiv.className = "column";
      thumbnailContainer.appendChild(thumbnailDiv);
  
      const thumbnailDivImg = document.createElement("img");
      thumbnailDivImg.className = ("demo");
      thumbnailDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
    //   thumbnailDivImg.onclick = currentSlide(Number(index));
    //   thumbnailDivImg.addEventListener("click", currentSlide(Number(index)));
      
      thumbnailDiv.appendChild(thumbnailDivImg);
      // thumbnailDivImg.addEventListener("click", function() { console.log("thumbnail img clicked") });
      // thumbnailDivImg.addEventListener("click", hello(Number(index)));
    }
  }

  createThumbnailDivs();


  // ADD currentslide(n) TO THUMBNAIL IMAGES
  function addListenerThumbnailImg(){
    const thumbnailImages = document.getElementsByClassName("demo");
  
    for (let i = 0; i < thumbnailImages.length; i++) {
      // thumbnailImages[i].addEventListener("click", function() { console.log("thumbnail img clicked") });
      thumbnailImages[i].addEventListener('click', function(index) { 
        return function () {
          currentSlide(Number(index + 1));
        };
      }(i), true);
    }
  }
  
  addListenerThumbnailImg();



// MODAL


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
    // console.log("gallery img clicked");
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
//   DEFAULT SLIDE INDEX
  var slideIndex = 1;

  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
    // console.log("thumbnail img clicked");
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    // var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    // captionText.innerHTML = dots[slideIndex-1].alt;
  }