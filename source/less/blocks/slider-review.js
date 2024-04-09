let sliderList = document.querySelector('.slider-review__list');
let sliderReviews = document.querySelectorAll('.reviews__item');
let sliderDots = document.querySelectorAll('.slider-review__dot');
let sliderBtnNext = document.querySelector('.reviews__button--next')
let sliderBtnPrev = document.querySelector('.reviews__button--prev')


let sliderCount = 0;
let sliderWidth;

window.addEventListener('resize', showSlider);
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);
sliderDots.forEach((item, index) => {
  item.addEventListener('click', () => {
    if(!(item.classList.contains('slider-review__dot--current'))) {
      sliderCount = index;
      rollSlider();
      document.querySelector('.slider-review__dot--current').classList.remove('slider-review__dot--current')
      sliderDots[index].classList.add('slider-review__dot--current')
    }

  })
})

function showSlider() {
  sliderWidth = document.querySelector('.slider-review').offsetWidth;
  sliderList.style.width = sliderWidth * sliderReviews.length + 'px';
  sliderReviews.forEach(item => item.style.width = sliderWidth + 'px')
  rollSlider()
}
showSlider()

function nextSlide() {

  sliderCount++;
  if (sliderCount >= sliderReviews.length) {
    sliderCount = 0;
  }
  switchDot()
  rollSlider()
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderReviews.length - 1;
  }
  switchDot()
  rollSlider()
}

function rollSlider() {
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function switchDot() {
  document.querySelector('.slider-review__dot--current').classList.remove('slider-review__dot--current')
  sliderDots[sliderCount].classList.add('slider-review__dot--current')
}
