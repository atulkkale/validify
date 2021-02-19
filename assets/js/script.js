var form = document.getElementById('form');
var firstnamev = document.getElementById('first_name');
var lastnamev = document.getElementById('last_name');
var statev = document.getElementById('state');
var yourmassagev = document.getElementById('your_massage');
var checkbox = document.getElementById('form_checkbox');
var hamburger = document.getElementById('hamburger');
var nav_menu = document.getElementById('nav_menu');
var checkboxchecked = 0; // If checkbox is checked then this variable value is set to 1 or otherwise 0.
var allinputchecked = 0; // If all inputs are valid then this variable value is set to 1 or otherwise 0.
var hamburgerclicked = 1; // This variable confirms if the hamburger is clicked or not.

checkbox.addEventListener('click', checkterms); // This checking if checkbox is checked or not
form.addEventListener('submit', validatenull); // This function check every field is null or not if not then submit form.
firstnamev.addEventListener('blur', validateinput); // This function validate input every time blur event occur.
lastnamev.addEventListener('blur', validateinput);
statev.addEventListener('blur', validateinput);
hamburger.addEventListener('click', menushowhide); // This function hide and show menu depends upon size of screen.

function checkterms() {
  if (checkbox.checked) {
    checkboxchecked = 1;
  } else {
    checkboxchecked = 0;
  }
}

function validatenull(e) {
  var firstname = document.forms['form']['first_name'].value;
  var lastname = document.forms['form']['last_name'].value;
  var state = document.forms['form']['state'].value;
  var yourmassage = document.forms['form']['your_massage'].value;

  if (
    firstname == '' ||
    lastname == '' ||
    state == '' ||
    yourmassage == '' ||
    checkboxchecked == 0 ||
    allinputchecked == 0
  ) {
    e.preventDefault();

    form.classList.add('null_field_msg');
    form.classList.remove('success_field_msg');
  } else {
    form.classList.remove('null_field_msg');
    form.classList.add('success_field_msg');
  }
}

function validateinput(e) {
  var input = e.target; // Here we save current input element in variable.
  var regex = /^[a-zA-Z]([a-zA-Z]){0,10}[a-zA-Z]$/; // Regular expression that allow only charecharacters.
  var str = input.value;

  if (regex.test(str)) {
    e.preventDefault();
    console.log('match');
    input.classList.remove('form_error');
    input.parentNode.classList.remove('form_error_msg');
    allinputchecked = 1;
  } else {
    console.log('not match');
    input.classList.add('form_error');
    input.parentNode.classList.add('form_error_msg');
    allinputchecked = 0;
  }
}

function menushowhide() {
  if (hamburgerclicked == 1) {
    nav_menu.style.display = 'block';
    hamburgerclicked = 0;
    var winwidth = window.innerWidth;
    console.log(winwidth);
  } else {
    nav_menu.style.display = 'none';
  }
}
