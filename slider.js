// THIS IS BASED ON:
// "AWESOME VANILLA JAVASCRIPT IMAGE SLIDER" BY DEV ED
// https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s


// THIS NOW WORKS WITH MULTIPLE SLIDER DIVS:
const sliders = document.querySelectorAll(".slider");
const befores = document.querySelectorAll(".before");
// const afters = document.querySelectorAll(".after");
const sliderDivs = document.getElementsByClassName("slider-div");

for (let i = 0; i < sliderDivs.length; i++) {

    sliderDivs[i].addEventListener("mousemove", function(event) {
        // CURSOR X POSITION IN DIV BEING HOVERED
        let xPos = event.layerX;
        // WIDTH OF DIV BEING HOVERED
        let size = sliderDivs[i].offsetWidth;
        // ACCESS before AND slider IN CURRENT sliderDiv:
        // DYNAMICALLY RESIZE before WIDTH AS CURSOR MOVES WITHIN CONTAINER DIV
        befores[i].style.width = xPos + "px";
        // ALSO, MOVE SLIDER DIV WITH CURSOR
        sliders[i].style.left = xPos + "px";
        // IF CURSOR IS NEAR LEFT/RIGHT EDGE, MAKE SLIDER AND before JUMP TO MIN AND MAX WIDTH
        if (xPos < 10) {
            befores[i].style.width = 0;
            // !!! TEMPORARY FIX FOR HIDING SLIDER !!!
            sliders[i].style.left = "-2px";
        }
        if(xPos + 10 > size) {
            befores[i].style.width = size + "px";
            // !!! TEMPORARY FIX FOR HIDING SLIDER !!!
            sliders[i].style.left = size + 2 + "px";
        }
    }, false);
}
    

// *** layerX: ***
// The UIEvent.layerX read-only property returns the horizontal coordinate of the event relative to the current layer.

// This property takes scrolling of the page into account and returns a value relative to the whole of the document unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.


// *** offsetWidth: ***
// The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.