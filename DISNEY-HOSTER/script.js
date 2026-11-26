document.querySelectorAll(".movies").forEach((container, index) => {
    const slider = container.querySelector(".slider");
    const rightBtn = container.querySelector(".swiper-right");
    const leftBtn = container.querySelector(".swiper-left");

    console.log(`Row ${index}:`, { slider, rightBtn, leftBtn });

    if (!slider || !rightBtn || !leftBtn) return;

    let ml = 0;
    const step = 1728;

    rightBtn.addEventListener("click", function () {
        const maxScroll = Math.max(0, slider.scrollWidth - container.clientWidth);
        console.log(`Row ${index} clicked ->`, {
            scrollWidth: slider.scrollWidth,
            clientWidth: container.clientWidth,
            maxScroll
        });
        ml = Math.min(ml + step, maxScroll);
        slider.style.marginLeft = -ml + "px";
    });

    leftBtn.addEventListener("click", function () {
        ml = Math.max(ml - step, 0);
        slider.style.marginLeft = -ml + "px";
    });
});