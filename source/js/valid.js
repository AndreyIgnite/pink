//Constants

const flex = "flex";
const noDisplay = "none";

//Elements

const form = document.getElementById('registration');
const error_Popup = document.querySelector('.modal__error');
const success_Popup = document.querySelector('.modal__success');
const btn_Ok = document.querySelector('.button-for-form__error');
const btn_Close = document.querySelector('.button-for-form__success');

//Functions
function validation(form) {
  let result = true;
  let inputs = form.querySelectorAll('.contacts-list__field--required');
  inputs.forEach(item => {
    if(item.value=="") {
      result = false;
    }
  });
  return result
}

function close_popup() {
  this.classList.remove('modal--show')
}

function add_class(popup) {
  popup.classList.add('modal--show');
}

//main
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(validation(this)) {
    add_class(success_Popup);
  }
  else add_class(error_Popup);
})

btn_Ok.addEventListener('click', close_popup.bind(error_Popup));
btn_Close.addEventListener('click', close_popup.bind(success_Popup));