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
  switchDot(sliderCount);
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

function switchDot(index) {
  sliderDots.forEach((item) => item.classList.remove('slider-review__dot--current'))
  sliderDots[index].classList.add('slider-review__dot--current')
}

let touchSurface = document.querySelector('.slider-review'),
distX,
dustY,
startX,
startY,
dragndropSlidePosition,
dragndropSlideShit,
currentSlidePosition;

touchSurface.addEventListener('touchstart', function(e) {
  sliderList.style.transition = 'all 0s';
  let event = e.changedTouches[0];
  startX = event.pageX;
  startY = event.pageY;
  dragndropSlideShit = 0;
  currentSlidePosition = sliderWidth * -sliderCount;
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchmove', function(e) {
  let event = e.changedTouches[0];
  dragndropSlideShit = event.pageX - startX;
  dragndropSlidePosition = currentSlidePosition + dragndropSlideShit;
  if ((event.pageY - startY) <= 100) {
  sliderList.style.transform = `translateX(${dragndropSlidePosition}px)`;
  }
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchend', function(e) {
  sliderList.style.transition = 'all 0.2s';
  if (Math.abs(dragndropSlideShit) < sliderWidth / 7.1) {
    rollSlider(sliderCount);
  }
  if ((dragndropSlideShit < -sliderWidth / 7) && !((sliderCount==sliderReviews.length - 1))) {
    sliderCount++;
    if (sliderCount >= sliderReviews.length) {
      sliderCount = 0;
    }
    rollSlider(sliderCount);
  } else {
    rollSlider(sliderCount)
  }
  if ((dragndropSlideShit > sliderWidth / 7) && !(sliderCount==0))  {
    sliderCount--;
    if (sliderCount < 0) {
      sliderCount = sliderReviews.length - 1;
    }
    rollSlider(sliderCount)
  } else {
    rollSlider(sliderCount)
  }
}, false)

function swipe(swipe) {

}