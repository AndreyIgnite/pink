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
      sliderCount = index;
      rollSlider(sliderCount)
  })
})

function showSlider() {
  sliderWidth = document.querySelector('.slider-review').offsetWidth;
  sliderList.style.width = sliderWidth * sliderReviews.length + 'px';
  sliderReviews.forEach(item => item.style.width = sliderWidth + 'px')
  rollSlider(sliderCount)
}
showSlider()

function nextSlide() {

  sliderCount++;
  if (sliderCount >= sliderReviews.length) {
    sliderCount = 0;
  }
  rollSlider(sliderCount)
}

function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderReviews.length - 1;
  }
  rollSlider(sliderCount)
}

function rollSlider(index) {
  switchDot(index)
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function switchDot(index) {
  sliderDots.forEach((item) => item.classList.remove('slider-review__dot--current'))
  sliderDots[index].classList.add('slider-review__dot--current')
}

let touchSurface = document.querySelector('.slider-review'),
distX,
startX,
dragndropSlidePosition,
dragndropSlideShit,
currentSlidePosition;

touchSurface.addEventListener('touchstart', function(e) {
  sliderList.style.transition = 'all 0s';
  let event = e.changedTouches[0];
  startX = event.pageX;
  dragndropSlideShit = 0;
  console.log(startX);
  console.log(sliderCount + 'слайд');
  currentSlidePosition = sliderWidth * -sliderCount;
  console.log(currentSlidePosition + ' px')
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchmove', function(e) {
  let event = e.changedTouches[0];
  dragndropSlideShit = event.pageX - startX;
  dragndropSlidePosition = currentSlidePosition + dragndropSlideShit
  console.log(dragndropSlidePosition  + ' px');
  sliderList.style.transform = `translateX(${dragndropSlidePosition}px)`;
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchend', function(e) {
  sliderList.style.transition = 'all 0.6s';
  if (Math.abs(dragndropSlideShit) < sliderWidth/3) {
    rollSlider(sliderCount)
  }
}, false)

function swipe(swipe) {

}