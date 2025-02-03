let slideIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider img');
    slideIndex += step;

    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);
