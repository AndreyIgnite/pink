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
  sliderList.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

function switchDot(index) {
  sliderDots.forEach((item) => item.classList.remove('slider-review__dot--current'))
  sliderDots[index].classList.add('slider-review__dot--current')
}

let touchSurface = document.querySelector('.slider-review')
let startTime;
let elapsedTime
let threshhold = 150;
let allowedtime = 200;
let distX;
let distY
let startX;
let startY;

touchSurface.addEventListener('touchstart', function(e) {
  let event = e.changedTouches[0];
  distX = 0;
  distY = 0;
  startX = event.pageX;
  startY = event.pageY;
  startTime = new Date().getTime();
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchmove', function(e) {
  e.preventDefault();
}, false)

touchSurface.addEventListener('touchend', function(e) {
  let event = e.changedTouches[0];
  distX = event.pageX - startX;
  distY = event.pageY - startY;
  elapsedTime = new Date().getTime() - startTime;
  console.log(elapsedTime)
  let resultSwipe = (elapsedTime <= allowedtime && distX <= -threshhold && Math.abs(distY) <= 100);
  swipeRight(resultSwipe)
  e.preventDefault()
}, false)

function swipeRight(swipe) {
  if(swipe) {
    sliderCount++;
    if (sliderCount >= sliderReviews.length) {
      sliderCount = 0;
    }
    rollSlider(sliderCount);
  }

}