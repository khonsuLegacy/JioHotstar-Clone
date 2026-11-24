document.querySelectorAll(".movies").forEach((container) => {
    const slider = container.querySelector(".slider");
    const rightBtn = container.querySelector(".swiper-right");
    const leftBtn = container.querySelector(".swiper-left");

    let ml = 0; // Each slider tracks its own position
    const step = 1728;

    rightBtn.addEventListener("click", function () {
        const maxScroll = Math.max(0, slider.offsetWidth - container.offsetWidth);
        ml = Math.min(ml + step, maxScroll);
        slider.style.marginLeft = -ml + "px";
    });

    leftBtn.addEventListener("click", function () {
        ml = Math.max(ml - step, 0);
        slider.style.marginLeft = -ml + "px";
    });
});