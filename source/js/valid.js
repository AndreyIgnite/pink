//Constants

const flex = "flex";
const noDisplay = "none";

//Elements

const allInputs = document.querySelectorAll('.contacts-list__field');
const inputSucces = '2px solid #E5E5E5';
const inputError = '2px solid #D22856';
const inputSucces_2 = '#FFFFFF'
const inputError_2 = 'rgba(210, 40, 86, 0.33)';
const form = document.getElementById('registration');
const error_Popup = document.querySelector('.modal__error');
const success_Popup = document.querySelector('.modal__success');
const btn_Ok = document.querySelector('.button-for-form__error');
const btn_Close = document.querySelector('.button-for-form__success');
let reqInputs = document.querySelectorAll('.contacts-list__field--required')

//Functions
function validation(form) {
  let result = true;
  let inputs = form.querySelectorAll('.contacts-list__field--required');
  inputs.forEach(item => {
    if(!Boolean(item.value)) {
      //item.style.border = inputError;
      item.style.backgroundColor = inputError_2;
      result = false;
    }
  });
  return result
}

function checkValue(input) {
  if(Boolean(input.value))
    return true
  else return false
}

function checkAllinputs() {

}

function close_popup() {
  this.classList.remove('modal--show')
}

function add_class(popup) {
  popup.classList.add('modal--show');
}
//Functions


//main
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if(validation(this)) {
    add_class(success_Popup);
  }
  else {
    add_class(error_Popup);
  }
})

reqInputs.forEach(item => {
  item.addEventListener('input', function() {
    if(checkValue(item)==true)
      //item.style.border = inputSucces;
      item.style.backgroundColor = inputSucces_2
    else {
      //item.style.border = inputError;
      item.style.backgroundColor = inputError_2;
    }
  })
})




btn_Ok.addEventListener('click', close_popup.bind(error_Popup));
btn_Close.addEventListener('click', function() {
  success_Popup.classList.remove('modal--show');
  allInputs.forEach(item => {
    item.value = "";
  })
});

