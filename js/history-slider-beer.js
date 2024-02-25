const slider = document.querySelector(".background-slider");
const sliderInner = slider.querySelector(".background-slider__inner");
const prevButton = slider.querySelector(".slider__button--prev");
const nextButton = slider.querySelector(".slider__button--next");

let slidesPerView = getSlidesPerView();
let slides = Array.from(sliderInner.children);
let currentIndex = slidesPerView;

setupSlider();

function getSlidesPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 3;
    return 1;
}

function setupSlider() {
    slides = slides.filter(slide => !slide.classList.contains("clone"));

    const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
    const clonesEnd = slides.slice(-slidesPerView).map(cloneSlide);

    sliderInner.append(...clonesStart, ...slides, ...clonesEnd);

    slides = Array.from(sliderInner.children);

    slides.forEach(slide => slide.classList.add("animated"));

    updateSlider();
}

function cloneSlide(slide) {
    const clone = slide.cloneNode(true);
    clone.classList.add("clone");
    return clone;
}

function updateSlider() {
    sliderInner.style.transform = `translateX(-${currentIndex * 100 / slidesPerView}%)`;
}

prevButton.addEventListener("click", () => {
    if (--currentIndex < 0) {
        currentIndex = slides.length - slidesPerView * 2 - 1;
        sliderInner.style.transition = "none";
        updateSlider();

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sliderInner.style.transition = "";
            });
        });
    }
});

nextButton.addEventListener("click", () => {
    sliderInner.style.transition = "";
    if (++currentIndex >= slides.length - slidesPerView) {
        currentIndex = slidesPerView;
        sliderInner.style.transition = "none";
        updateSlider();
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                sliderInner.style.transition = "";
            });
        });
    }
    updateSlider();
});

window.addEventListener("resize", () => {
    slidesPerView = getSlidesPerView();
    setupSlider();
});