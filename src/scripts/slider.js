console.log("slider.js");

// THIS IS BASED ON:
// "AWESOME VANILLA JAVASCRIPT IMAGE SLIDER" BY DEV ED
// https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s

// THIS NOW CAN HANDLE MULTIPLE SLIDER DIVS:

const sliders = document.querySelectorAll(".slider");
const befores = document.querySelectorAll(".before");
const containers = document.getElementsByClassName("img-slider-container");

const changeWidth = (element, newWidth) => {
  element.style.width = newWidth + "px";
};

const changeLeftPosition = (element, imgWidth = 0, pixels = 0) => {
  element.style.left = imgWidth + pixels + "px";
};

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener(
    "mousemove",
    (event) => {
      let xPos = event.layerX;
      let divWidth = containers[i].offsetWidth;
      let currentDiv = befores[i];
      let currentSlider = sliders[i];
      changeWidth(currentDiv, xPos);

      sliders[i].style.left = xPos + "px";
      if (xPos < 10) {
        changeWidth(currentDiv, 0);
        changeLeftPosition(currentSlider, divWidth, -1 - divWidth);
      }
      if (xPos + 10 > divWidth) {
        changeWidth(currentDiv, divWidth);
        changeLeftPosition(currentSlider, divWidth, 1);
      }
    },
    false
  );
}

// *** layerX: ***
// The UIEvent.layerX read-only property returns the horizontal coordinate of the event relative to the current layer.

// This property takes scrolling of the page into account and returns a value relative to the whole of the document unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.

// *** offsetWidth: ***
// The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.

// const sliders = document.querySelectorAll(".slider");
// const befores = document.querySelectorAll(".before");
// // const afters = document.querySelectorAll(".after");
// const containers = document.getElementsByClassName("container");

// const changeWidth = (element, newWidth) => {
//     element.style.width = newWidth + "px";
// }

// const changeLeftPosition = (element, imgWidth = 0, pixels = 0) => {
//     element.style.left = imgWidth + pixels + "px";
// }

// for (let i = 0; i < containers.length; i++) {

//     containers[i].addEventListener("mousemove", (event) => {
//         // CURSOR X POSITION IN DIV BEING HOVERED
//         let xPos = event.layerX;
//         // WIDTH OF DIV BEING HOVERED
//         let divWidth = containers[i].offsetWidth;
//         // ACCESS before AND slider IN CURRENT sliderDiv:
//         // DYNAMICALLY RESIZE before WIDTH AS CURSOR MOVES WITHIN CONTAINER DIV
//         changeWidth(befores[i], xPos);

//         // ALSO, MOVE SLIDER DIV WITH CURSOR
//         sliders[i].style.left = xPos + "px";
//         // IF CURSOR IS NEAR LEFT/RIGHT EDGE, MAKE SLIDER AND before JUMP TO MIN AND MAX WIDTH
//         if (xPos < 10) {
//             changeWidth(befores[i], 0);
//             // !!! -2px TEMPORARY FIX FOR HIDING SLIDER !!!
//             // sliders[i].style.left = "-2px";
//             changeLeftPosition(sliders[i], divWidth, (-10-divWidth));
//         }
//         if(xPos + 10 > divWidth) {
//             // befores[i].style.width = divWidth + "px";
//             changeWidth(befores[i], divWidth);
//             // !!! +2px TEMPORARY FIX FOR HIDING SLIDER !!!
//             // sliders[i].style.left = divWidth + 2 + "px";
//             changeLeftPosition(sliders[i], divWidth, 10);
//         }
//     }, false);
// }
