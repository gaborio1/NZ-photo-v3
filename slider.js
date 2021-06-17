const sliderLandscapeStyle = document.querySelector(".slider--landscape-style");
const beforeLandscapeStyle = document.querySelector(".img-container-before--landscape-style");
const afterLandscapeStyle = document.querySelector("img-container-after--landscape-style");
const sliderContainerLandscapeStyle = document.querySelector(".slider-container--landscape-style");

const slideDivLandscapeStyle = (event) => {
    let xPos = event.layerX;
    let size = sliderContainerLandscapeStyle.offsetWidth;
    beforeLandscapeStyle.style.width = xPos + "px";
    sliderLandscapeStyle.style.left = xPos + "px";
    if (xPos < 10) {
        beforeLandscapeStyle.style.width = 0;
        sliderLandscapeStyle.style.left = 0;
    }
    if(xPos + 10 > size) {
        beforeLandscapeStyle.style.width = size + "px";
        sliderLandscapeStyle.style.left = size + "px";
    }
}

sliderContainerLandscapeStyle.addEventListener("mousemove", slideDivLandscapeStyle);




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
        sliderPortraitStyle.style.left = 0;
    }
    if(xPos + 10 > size) {
        beforePortraitStyle.style.width = size + "px";
        sliderPortraitStyle.style.left = size + "px";
    }
}

sliderContainerPortraitStyle.addEventListener("mousemove", slideDivPortraitStyle);