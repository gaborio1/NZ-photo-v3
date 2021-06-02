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
// createDivs()


// CREATE GALLERY DIVS WITH IMAGES
const galleryContainerRow = document.querySelector(".row");

const createGalleryDivs = () => {
  for(let index of imagesTest) {
    // console.log("hello");
    const galleryDiv = document.createElement("div");
    galleryDiv.className = "column";
    // imgDiv.innerText = index;
    // imgDiv.style.backgroundImage = "url("`./images/portrait/portrait-${index}`")"
    // imgDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)"

    // galleryDiv.style.backgroundImage = "url(../images/portrait/portrait-" + index + ".jpg)";
    galleryContainerRow.appendChild(galleryDiv);

    const galleryDivImg = document.createElement("img");
    galleryDivImg.className = ("hover-shadow");
    galleryDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
    // galleryDivImg.addEventListener("click", openModal, currentSlide);
    // galleryDivImg.addEventListener("click", openModal);
    galleryDiv.appendChild(galleryDivImg);
    // galleryDivImg.addEventListener("click", openModal, currentSlide);
    galleryDiv.onclick = openModal;
    // galleryDiv.onclick = currentSlide(Number(index));
    

    // galleryDiv.onclick = currentSlide(Number(index));
  }
}

createGalleryDivs();

// CREATE MODAL DIVS WITH NUMBERTEXT AND IMAGES
const modalContent = document.querySelector(".modal-content");

const createModalDivs = () => {
    for(let index of imagesTest) {
      const modalDiv = document.createElement("div");
      modalDiv.className = "mySlides";
      modalContent.appendChild(modalDiv);

      const numberText = document.createElement("div");
      numberText.className = ("numbertext");
      numberText.textContent = index + " / " + imagesTest.length;
      modalDiv.appendChild(numberText);
  
      const modalDivImg = document.createElement("img");
      modalDivImg.className = ("modal-img");
      modalDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
    //   modalDivImg.style.width = "40%";
    //   modalDivImg.style.width = "200px";
    //   modalDivImg.addEventListener("click", createModalDivs);
      modalDiv.appendChild(modalDivImg);
    }
  }

  createModalDivs();

// CREATE THUMBNAIL DIVS WITH IMAGES

// const thumbnailContainer = document.querySelector(".thumbnail-container");


const hello = (idx) => {
    console.log("hello " + idx);
    console.log(typeof(Number(idx)));
}

const createThumbnailDivs = () => {
    const thumbnailContainer = document.createElement("div");
    thumbnailContainer.className = ("thumbnail-container");
    modalContent.appendChild(thumbnailContainer);

    for(let index of imagesTest) {
      const thumbnailDiv = document.createElement("div");
      thumbnailDiv.className = "column";
      thumbnailContainer.appendChild(thumbnailDiv);
  
      const thumbnailDivImg = document.createElement("img");
      thumbnailDivImg.className = ("demo");
      thumbnailDivImg.src = "../images/portrait/portrait-" + index + ".jpg";
    //   thumbnailDivImg.onclick = currentSlide(Number(index));
    //   thumbnailDivImg.style.width = "30%";
    //   thumbnailDivImg.addEventListener("click", currentSlide(Number(index)));
    //   thumbnailDivImg.addEventListener("click", currentSlide(2));
      
      thumbnailDiv.appendChild(thumbnailDivImg);
      thumbnailDivImg.addEventListener("click", function() { console.log("thumbnail img clicked") });
      thumbnailDivImg.addEventListener("click", hello(Number(index)));
    }
  }

  createThumbnailDivs();



// MODAL


// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    console.log("gallery img clicked");
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