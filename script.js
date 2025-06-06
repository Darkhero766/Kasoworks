
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}


let slideIndex = 0; 
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const autoplayInterval = 5000;
let carouselTimer; 

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1; 
  }
  slides[slideIndex - 1].classList.add('active');
  dots[slideIndex - 1].classList.add('active');
}


function currentSlide(n) {
  slideIndex = n - 1; 
  clearInterval(carouselTimer);
  showSlides(); 
  startCarouselAutoplay(); 
}


function startCarouselAutoplay() {
  carouselTimer = setInterval(showSlides, autoplayInterval);
}


document.addEventListener('DOMContentLoaded', () => {

  if (slides.length > 0 && dots.length > 0) {
    slides[0].classList.add('active'); 
    dots[0].classList.add('active');   
    startCarouselAutoplay();
  }
});


