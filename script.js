let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const intervalTime = 4000; // can adjust miliseconds if its wonky

function showSlide(n) {
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function autoSlide() {
    nextSlide();
}


showSlide(slideIndex);

setInterval(autoSlide, intervalTime);
