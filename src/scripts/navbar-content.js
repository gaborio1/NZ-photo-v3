if (window.innerWidth > 767) {
  	console.log("navbar-content.js");
  	// !!! ESCAPE SPECIAL CHARS WITH \ !!!
  	// ( you're => you\'re )

  	document.write(
    	'\
	\
	<div class="header-content"><div class="logo-container"><div class="logo__block-row"><div class="logo__block logo__block-1"></div><div class="logo__block logo__block-2"></div><div class="logo__block logo__block-3"></div></div></div><nav><a id="navbar_home" class="nav-link nav-link-text hover-pointer" href="../index.html">Home</a><a <a id="navbar__about" class="nav-link nav-link-text hover-pointer" href="about.html">About</a><div class="nav-link--dropdown"><button id="navbar__portfolio" class="dropbtn nav-link-text hover-pointer">portfolio <!-- <i class="fa fa-caret-down"></i> --></button><div class="dropdown-content"><a href="model.html">model</a><a href="portrait.html">portrait</a><a href="nature.html">nature</a><a href="#">! street !</a><a href="#">! motion !</a><a href="#">! abstract !</a><a href="lightbox21.html">lightbox js 2:1</a></div></div> <div class="nav-link--dropdown"><button id="navbar__products" class="dropbtn nav-link-text hover-pointer">products <!-- <i class="fa fa-caret-down"></i> --></button><div class="dropdown-content"><a href="products.html">Link 1</a><a href="products.html">Link 2</a><a href="products.html">Link 3</a><a href="products.html">Link 4</a></div></div> <a id="navbar__contact" class="nav-link nav-link-text hover-pointer" href="contact.html">Contact</a></nav><div class="search-container"><form action=""><button type="submit" id="submit-btn" class="submit-btn hidden"><i class="fa fa-search"></i></button><input type="text" autocomplete="off" placeholder="Search enzee.com" name="search" id="search-input" class="hidden" required><div  id="search-dropdown-content" class="search-dropdown-content hidden"><a href="about.html">About</a><a href="contact.html">Contact</a><a href="#privacypolicy">Privacy policy</a><a href="#reviews">Reviews</a><a href="#clients">Clients</a><a href="products.html">Products</a><a href="portrait.html">Portrait</a><a href="model.html">Model</a><a href="nature.html">Nature</a></div><button type="" id="default-btn" class="default-btn hover-pointer"><i class="fa fa-search"></i></button><button type="" id="close-btn" class="close-btn hidden">X<!-- <i class="fa fa-times"></i> --></button></form></div></div>\
	\
	'
	);
}

{
  /* <div class="header-content">
          <div class="logo-container">
            <div class="logo__block-row">
              <div class="logo__block logo__block-1"></div>
              <div class="logo__block logo__block-2"></div>
              <div class="logo__block logo__block-3"></div>
            </div>
          </div>
          <nav>
            <a
              id="navbar__home"
              class="nav-link nav-link-text hover-pointer"
              href="#"
              >Home</a
            >
            <a
              id="navbar__about"
              class="nav-link nav-link-text hover-pointer"
              href="pages/about.html"
              >About</a
            >
            <div class="nav-link--dropdown">
              <button
                id="navbar__portfolio"
                class="dropbtn nav-link-text hover-pointer"
              >
                portfolio
                <!-- <i class="fa fa-caret-down"></i> -->
              </button>
              <div class="dropdown-content">
                <a href="pages/model.html">model</a>
                <a href="pages/portrait.html">portrait</a>
                <a href="pages/nature.html">nature</a>
                <a href="#">! street !</a>
                <a href="#">! motion !</a>
                <a href="#">! abstract !</a>
                <a href="pages/lightbox21.html">lightbox js 2:1</a>
              </div>
            </div>
            <div class="nav-link--dropdown">
              <button
                id="navbar__products"
                class="dropbtn nav-link-text hover-pointer"
              >
                products
                <!-- <i class="fa fa-caret-down"></i> -->
              </button>
              <div class="dropdown-content">
                <a href="pages/products.html">Link 1</a>
                <a href="pages/products.html">Link 2</a>
                <a href="pages/products.html">Link 3</a>
                <a href="pages/products.html">Link 4</a>
              </div>
            </div>
            <a
              id="navbar__contact"
              class="nav-link nav-link-text hover-pointer"
              href="pages/contact.html"
              >Contact</a
            >
          </nav>
          <div class="search-container">
            <form action="">
              <button type="submit" id="submit-btn" class="submit-btn hidden">
                <i class="fa fa-search"></i>
              </button>
              <input
                type="text"
                autocomplete="off"
                placeholder="Search enzee.com"
                name="search"
                id="search-input"
                class="hidden"
                required
              />
              <div
                id="search-dropdown-content"
                class="search-dropdown-content hidden"
              >
                <a href="pages/about.html">About</a>
                <a href="pages/contact.html">Contact</a>
                <a href="#privacypolicy">Privacy policy</a>
                <a href="#reviews">Reviews</a>
                <a href="#clients">Clients</a>
                <a href="#products">Products</a>
                <a href="pages/portrait.html">Portrait</a>
                <a href="pages/model.html">Model</a>
                <a href="pages/nature.html">Nature</a>
              </div>
              <button
                type=""
                id="default-btn"
                class="default-btn hover-pointer"
              >
                <i class="fa fa-search"></i>
              </button>
              <button type="" id="close-btn" class="close-btn hidden">
                X
                <!-- <i class="fa fa-times"></i> -->
              </button>
            </form>
          </div>
        </div> */
}
