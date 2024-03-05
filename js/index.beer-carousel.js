const slides = [
    `<img src="imgs/imgs-video-beer-carousel/man-beer.png" alt="Slide 1">`,
    `<img src="imgs/imgs-video-beer-carousel/two-glasses.png" alt="Slide 2">`,
    `<img src="imgs/imgs-video-beer-carousel/orange-beer.png" alt="Slide 3">`,
    `<img src="imgs/imgs-video-beer-carousel/beer-company.png" alt="Slide 4">`,
    `<img src="imgs/imgs-video-beer-carousel/bar.png" alt="Slide 5">`,
];

function renderSlides() {
    const slideContainer = document.querySelector('.beer-carousel__slide');
    slideContainer.innerHTML = slides.map(slide => `<div class="carousel__slide">${slide}</div>`).join('');
    const carouselSlides = document.querySelectorAll('.carousel__slide');
    carouselSlides.forEach(slide => slide.style.width = '20%');
}

renderSlides();

const btnNext = document.querySelector('.carousel-button__button-next');
const btnPrev = document.querySelector('.carousel-button__button-prev');

btnNext.addEventListener('click', () => {
    const slideContainer = document.querySelector('.beer-carousel__slide');
    slideContainer.appendChild(slideContainer.firstElementChild);
});

btnPrev.addEventListener('click', () => {
    const slideContainer = document.querySelector('.beer-carousel__slide');
    slideContainer.insertBefore(slideContainer.lastElementChild, slideContainer.firstElementChild);
});

const slideContainer = document.querySelector('.beer-carousel__slide');
let touchStartX = 0;
let touchEndX = 0;

slideContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
});

slideContainer.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const difference = touchStartX - touchEndX;
    if (Math.abs(difference) > 50) { // adjust sensitivity here
        if (difference > 0) {
            // Swiped left
            slideContainer.appendChild(slideContainer.firstElementChild);
        } else {
            // Swiped right
            slideContainer.insertBefore(slideContainer.lastElementChild, slideContainer.firstElementChild);
        }
    }
}

