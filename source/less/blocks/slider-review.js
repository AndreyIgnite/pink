let sliderList = document.querySelector('.slider-review__list');
let sliderReviews = document.querySelectorAll('.reviews__item');
let sliderDots = document.querySelectorAll('.slider-review__toggle');
let sliderBtnNext = document.querySelector('.reviews__button--next')
let sliderBtnPrev = document.querySelector('.reviews__button--prev')

let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlider);
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);


function showSlider() {
  sliderWidth = document.querySelector('.slider-review').offsetWidth;
  sliderList.style.width = sliderWidth * sliderReviews.length + 'px';
  sliderReviews.forEach(item => item.style.width = sliderWidth + 'px')
}
showSlider()

function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderReviews.length) {
    sliderCount = 0;
  }
  console.log(sliderCount)
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderReviews.length - 1;
  }
  console.log(sliderCount)
}