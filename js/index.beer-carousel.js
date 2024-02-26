const slides = [
    `<div class="carousel__slide">
        <img height="150" width="150" src="imgs/imgs-video-beer-carousel/man-beer.png" alt="Slide 1">
    </div>`,
    `<div class="carousel__slide">
        <img height="150" width="150" src="imgs/imgs-video-beer-carousel/two-glasses.png" alt="Slide 2">
    </div>`,
    `<div class="carousel__slide">
        <img height="150" width="150" src="imgs/imgs-video-beer-carousel/orange-beer.png" alt="Slide 3">
    </div>`,
    `<div class="carousel__slide">
        <img height="150" width="150" src="imgs/imgs-video-beer-carousel/beer-company.png" alt="Slide 4">
    </div>`,
    `<div class="carousel__slide">
        <img height="150" width="150" src="imgs/imgs-video-beer-carousel/bar.png" alt="Slide 5">
    </div>`,
];

let currentIdx = 0;
function renderSlide() {
    const slidContainer = document.querySelector('.beer-carousel__slide');
    slidContainer.innerHTML = slides[currentIdx];
};

renderSlide();

function nextSlide() {
    currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
    renderSlide();
};

function prevSlide() {
    currentIdx = currentIdx - 1 < 0  ? slides.length -1: currentIdx - 1;
    renderSlide();
};


const btnNext = document.querySelector('.carousel-button__button-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.carousel-button__button-prev');
btnPrev.addEventListener('click', prevSlide);