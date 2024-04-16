let slider_List = document.querySelector(".slider__list"); //обертка слайдера
console.log(slider_List);
let slider_Products = document.querySelectorAll(".slider__item"); //массив со слайдами
let touchSurface_2 = document.querySelector(".slider__wrapper"); //зона свайпа
let sliderCount_2 = 0; //счетчик слайдов, индикатор текущего слайда
let sliderWidth_2; //ширина видимой части слайдера, ширина одного слайда
let startX_2; //начальная точка касания, для тачпадов
let dragndropSlidePosition_2; //позиция ленты слайдеров после оттаскивания слайда при свайпе на произвольное расстояние в px для translateX
let dragndropSlideShit_2; //величина сдвига
let currentSlidePosition_2; // текущая позиция ленты слайдера, (величина кратна sliderCount)
const slider_Area = 88;
//let shift = 6;

function showSlider_2() { //функция пересчета ширины слайдера под экран
  sliderWidth_2 = touchSurface_2.offsetWidth; //определяем ширину контейнера слайдера
  slider_List.style.width = sliderWidth_2 * slider_Products.length + "px"; //даём ширину обёртке слайдера, умноженную на кол-во слайдов
  slider_Products.forEach((item) => (item.style.width = slider_Area / 100 * sliderWidth_2 + "px")); //даём каждому слайду ширину видимой области, чтобы слайды ровно уместились в обертку
  rollSlider_2(sliderCount_2);
}
showSlider_2()

function rollSlider_2(index) { //ролл ленты(обёртки) слайдера в опредёлнную позицию
  slider_List.style.transform = `translateX(${-sliderCount_2 * sliderWidth_2}px)`; //в зависимости от индикатора едем на опреденный слайд
  let shift = (100 - slider_Area) / 2;
  shift = shift + index * 2 * shift;
  slider_List.style.padding = `0 0 0 ${shift}%`;

}

window.addEventListener('resize', showSlider_2)