let slideIndex = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slides img');
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

// Display first slide when the page loads
showSlide(slideIndex);
