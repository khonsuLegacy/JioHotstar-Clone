const slider = document.getElementById("slider");
const container = slider.parentElement; // .movies container
let ml = 0;
const step = 1728; // How many pixels to move per click

document.getElementById("swipe-right").addEventListener("click", function () {
    const maxScroll = slider.offsetWidth - container.offsetWidth;

    ml = Math.min(ml + step, maxScroll); // Stops exactly at the last card 
    slider.style.marginLeft = -ml + "px";
});

document.getElementById("swipe-left").addEventListener("click", function () {
    ml = Math.max(ml - step, 0); // Stops exactly at the first card
    slider.style.marginLeft = -ml + "px";
});