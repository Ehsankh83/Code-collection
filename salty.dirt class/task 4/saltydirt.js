const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(${-index * 100}%)`;
}

function showPrevious() {
  if (slideIndex === 0) {
    slideIndex = slider.children.length - 1;
  } else {
    slideIndex--;
  }
  showSlide(slideIndex);
}

function showNext() {
  if (slideIndex === slider.children.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
}

prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);