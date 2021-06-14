document.write('\
\
<div class="header-content"><div class="logo-container"><div class="logo__block-row"><div class="logo__block logo__block-1"></div><div class="logo__block logo__block-2"></div><div class="logo__block logo__block-3"></div></div></div><nav><a class="nav-link select-able active" href="../index.html">Home</a><a class="nav-link select-able" href="about.html">About</a><div class="dropdown"><button class="dropbtn select-able">portfolio <!-- <i class="fa fa-caret-down"></i> --></button><div class="dropdown-content"><a href="model.html">model</a><a href="portrait.html">portrait</a><a href="nature.html">nature</a><a href="#">! street !</a><a href="#">! motion !</a><a href="#">! abstract !</a><a href="pages/js-lightbox-test.html">lightbox js 3:2</a><a href="lightbox2:1.html">lightbox js 2:1</a></div></div> <div class="dropdown"><button class="dropbtn select-able">products <!-- <i class="fa fa-caret-down"></i> --></button><div class="dropdown-content"><a href="#">Link 1</a><a href="#">Link 2</a><a href="#">Link 3</a><a href="#">Link 4</a></div></div> <a class="nav-link select-able" href="contact.html">Contact</a></nav><div class="search-container"><form action=""><button type="submit" id="submit-btn" class="submit-btn hidden"><i class="fa fa-search"></i></button><input type="text" placeholder="Search enzee.com" name="search" id="search-input" class="hidden" required><button type="" id="default-btn" class="default-btn"><i class="fa fa-search"></i></button><button type="" id="close-btn" class="close-btn hidden">X<!-- <i class="fa fa-times"></i> --></button></form></div></div>\
\
');

{/* <div class="header-content">
                        <div class="logo-container">
                            <div class="logo__block-row">
                                <div class="logo__block logo__block-1"></div>
                                <div class="logo__block logo__block-2"></div>
                                <div class="logo__block logo__block-3"></div>
                            </div>
                        </div>
                        <nav>
                            <a class="nav-link select-able active" href="../index.html">Home</a>
                            <a class="nav-link select-able" href="about.html">About</a>
                            <div class="dropdown">
                                <button class="dropbtn select-able">portfolio 
                                    <!-- <i class="fa fa-caret-down"></i> -->
                                </button>
                                <div class="dropdown-content">
                                    <a href="model.html">model</a>
                                    <a href="portrait.html">portrait</a>
                                    <a href="nature.html">nature</a>
                                    <a href="#">! street !</a>
                                    <a href="#">! motion !</a>
                                    <a href="#">! abstract !</a>
                                    <a href="js-lightbox-test.html">lightbox js 3:2</a>
                                    <a href="lightbox2:1.html">lightbox js 2:1</a>
                                </div>
                            </div> 
                            <div class="dropdown">
                                <button class="dropbtn select-able">products 
                                    <!-- <i class="fa fa-caret-down"></i> -->
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                    <a href="#">Link 4</a>
                                </div>
                            </div> 
                            <a class="nav-link select-able" href="pages/contact.html">Contact</a>
                        </nav>
                        <div class="search-container">
                            <form action="">
                                <button type="submit" id="submit-btn" class="submit-btn hidden">
                                    <i class="fa fa-search"></i>
                                </button>
                                <input type="text" placeholder="Search enzee.com" name="search" id="search-input" class="hidden" required>
                                <button type="" id="default-btn" class="default-btn">
                                    <i class="fa fa-search"></i>
                                </button>
                                <button type="" id="close-btn" class="close-btn hidden">X
                                <!-- <i class="fa fa-times"></i> -->
                                </button>
                            </form>
                        </div>
                    </div>   */}

// // STICKY NAVBAR W3SCHOOLS

// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// const navbar = document.getElementById("header");

// // Get the offset position of the navbar
// const sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

// // NOT IN USE:

// // FADE IN/OUT GALLERY
// // let current = 0,
// // slides = document.querySelector(".mySlides");

// // setInterval(function() {
// //   for (let i = 0; i < slides.length; i++) {
// //     slides[i].style.opacity = 0;
// //   }
// //   current = (current != slides.length - 1) ? current + 1 : 0;
// //   slides[current].style.opacity = 1;
// // }, 2000);


// // SEARCH BAR

// const defaultButton = document.getElementById("default-btn");
// const submitButton = document.getElementById("submit-btn");
// const closeButton = document.getElementById("close-btn");
// const searchInput = document.getElementById("search-input");

// const imageContainer = document.getElementById("image-container");

// defaultButton.addEventListener("click", function() {
//     defaultButton.classList.add("hidden");
//     submitButton.classList.remove("hidden");
//     searchInput.classList.remove("hidden");
//     // searchInput.focus();
//     closeButton.classList.remove("hidden");
//     imageContainer.classList.add("blurred");

//     searchInput.style.width = "140px";
// })

// closeButton.addEventListener("click", function() {
//     defaultButton.classList.remove("hidden");
//     submitButton.classList.add("hidden");
//     searchInput.classList.add("hidden");
//     closeButton.classList.add("hidden");
//     imageContainer.classList.remove("blurred");
    
//     searchInput.style.width = "0px";
// })

// // ACTIVE NAV-LINK

// // Add active class to the current button (highlight it)
// // var header = document.getElementById("myDIV");
// var btns = document.getElementsByClassName("select-able");
// for (var i = 0; i < btns.length; i++) {
//   console.log(btns[i]);
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }