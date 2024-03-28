let toggler = document.querySelector(".main-nav__toggler");
let navigation = document.querySelector(".main-nav");
toggler.addEventListener("click", function () {
  navigation.classList.toggle('main-nav--opened')
  navigation.classList.toggle('main-nav--closed')
});