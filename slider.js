// THIS IS BASED ON:
// "AWESOME VANILLA JAVASCRIPT IMAGE SLIDER" BY DEV ED
// https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s


// ========== LANDSCAPE STYLE ==========
const sliderLandscapeStyle = document.querySelector(".slider--landscape-style");
const beforeLandscapeStyle = document.querySelector(".img-container-before--landscape-style");
const afterLandscapeStyle = document.querySelector("img-container-after--landscape-style");
const sliderContainerLandscapeStyle = document.querySelector(".slider-container--landscape-style");

const slideDivLandscapeStyle = (event) => {
    // !!! CURSOR X POSITION WITHIN sliderContainerLandscapeStyle SEE COMMENT BELOW FOR layerX !!!
    let xPos = event.layerX;
    // The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.
    let size = sliderContainerLandscapeStyle.offsetWidth;
    // DYNAMICALLY RESIZE before WIDTH AS CURSOR MOVES WITHIN CONTAINER DIV
    beforeLandscapeStyle.style.width = xPos + "px";
    // ALSO, MOVE SLIDER DIV WITH CURSOR
    sliderLandscapeStyle.style.left = xPos + "px";
    // IF CURSOR IS NEAR LEFT/RIGHT EDGE, MAKE SLIDER AND before JUMP TO MIN AND MAX WIDTH
    if (xPos < 10) {
        beforeLandscapeStyle.style.width = 0;
        // !!! TEMPORARY FIX FOR HIDING SLIDER !!!
        sliderLandscapeStyle.style.left = "-2px";
    }
    if(xPos + 10 > size) {
        beforeLandscapeStyle.style.width = size + "px";
        sliderLandscapeStyle.style.left = size + 2 + "px"; 
    }
   
}

sliderContainerLandscapeStyle.addEventListener("mousemove", slideDivLandscapeStyle);


// ========== PORTRAIT STYLE ==========
const sliderPortraitStyle = document.querySelector(".slider--portrait-style");
const beforePortraitStyle = document.querySelector(".img-container-before--portrait-style");
const afterPortraitStyle = document.querySelector("img-container-after--portrait-style");
const sliderContainerPortraitStyle = document.querySelector(".slider-container--portrait-style");

const slideDivPortraitStyle = (event) => {
    let xPos = event.layerX;
    let size = sliderContainerPortraitStyle.offsetWidth;
    beforePortraitStyle.style.width = xPos + "px";
    sliderPortraitStyle.style.left = xPos + "px";
    if (xPos < 10) {
        beforePortraitStyle.style.width = 0;
        sliderPortraitStyle.style.left = "-2px";
    }
    if(xPos + 10 > size) {
        beforePortraitStyle.style.width = size + "px";
        sliderPortraitStyle.style.left = size + 2 + "px";
    }
}

sliderContainerPortraitStyle.addEventListener("mousemove", slideDivPortraitStyle);


// TAKEN FROM: https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX

// The UIEvent.layerX read-only property returns the horizontal coordinate of the event relative to the current layer.

// This property takes scrolling of the page into account and returns a value relative to the whole of the document unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.