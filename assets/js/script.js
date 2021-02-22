var form = document.getElementById('form');
var firstnamev = document.getElementById('first_name');
var lastnamev = document.getElementById('last_name');
var statev = document.getElementById('state');
var yourmassagev = document.getElementById('your_massage');
var checkbox = document.getElementById('form_checkbox');
var hamburger = document.getElementById('hamburger');
var nav_menu = document.getElementById('nav_menu');
var close_menu_btn = document.getElementById('close_menu_btn');
var modal = document.getElementById('modal');
var modal_checkbox = document.getElementById('modal_checkbox');
var modal_close_btn = document.getElementById('modal_close_btn');
var modal_cancel_btn = document.getElementById('modal_cancel_btn');
var modal_agree_btn = document.getElementById('modal_agree_btn');
var checkboxchecked = 0; // If checkbox is checked then this variable value is set to 1 or otherwise 0.
var allinputchecked = 0; // If all inputs are valid then this variable value is set to 1 or otherwise 0.

var all_req_input_array = [firstnamev, lastnamev, statev]; // All field_required inputs are stored in this array.
for (var i = 0; i <= all_req_input_array.length - 1; i++) {
  // This for loop store field name for each requried field and store inside data attribute.
  var selected_input = all_req_input_array[i];
  var selected_inputf_name = selected_input.id.replace('_', ' ');
  selected_inputf_name =
    selected_inputf_name.charAt(0).toUpperCase() +
    selected_inputf_name.slice(1);
  selected_input.parentNode.setAttribute(
    'data-forminput-name',
    selected_inputf_name
  );
}

checkbox.addEventListener('click', checkterms); // This checking if checkbox is checked or not
modal_checkbox.addEventListener('click', checkterms); // This checking if modal checkbox is checked or not
modal_close_btn.addEventListener('click', closemodal); // This closes the modal window.
modal_cancel_btn.addEventListener('click', closemodal); // This closes the modal window.
modal_agree_btn.addEventListener('click', modalsubmit); // This closes the modal window.
form.addEventListener('submit', validatenullndsubmit); // This function check every field is null or not if not then submit form.
firstnamev.addEventListener('keyup', validateinput); // This function validate input every time keypress event occur.
lastnamev.addEventListener('keyup', validateinput);
statev.addEventListener('keyup', validateinput);
hamburger.addEventListener('click', menushowhide); // This function hide and show menu depends upon size of screen.
close_menu_btn.addEventListener('click', menushowhide);

function checkterms() {
  if (checkbox.checked || modal_checkbox.checked) {
    checkboxchecked = 1;
  } else {
    checkboxchecked = 0;
  }
}

function closemodal() {
  modal.classList.remove('show_desktop_item');
}

function modalsubmit() {
  if (checkboxchecked === 1) {
    document.form.submit();
  } else {
    modal_agree_btn.parentNode.classList.add('modal_terms_error');
  }
}

function validatenullndsubmit(e) {
  var firstname = document.forms['form']['first_name'];
  var lastname = document.forms['form']['last_name'];
  var state = document.forms['form']['state'];
  var yourmassage = document.forms['form']['your_massage'];

  if (firstname.value == '' || lastname.value == '' || state.value == '') {
    e.preventDefault();

    var upd_req_input_arr = [firstname, lastname, state]; // Stored updated requried fields in array.

    form.classList.remove('success_field_msg');
    form.classList.add('null_field_msg');

    for (var i = 0; i <= upd_req_input_arr.length - 1; i++) {
      if (upd_req_input_arr[i].value.length === 0) {
        upd_req_input_arr[i].classList.add('form_error');
        upd_req_input_arr[i].parentNode.classList.add('field_required');
      }
    }
  } else if (
    !(
      allinputchecked === 1 &&
      firstname.classList.contains('form_success') &&
      lastname.classList.contains('form_success') &&
      state.classList.contains('form_success')
    )
  ) {
    e.preventDefault();
    form.classList.add('null_field_msg');
  } else if (checkboxchecked === 0) {
    e.preventDefault();
    form.classList.remove('null_field_msg');
    modal_agree_btn.parentNode.classList.remove('modal_terms_error');
    modal.classList.add('show_desktop_item');
  } else {
    form.classList.remove('null_field_msg');
    firstname.classList.remove('form_error');
    firstname.parentNode.classList.remove('field_required');
    lastname.classList.remove('form_error');
    lastname.parentNode.classList.remove('field_required');
    state.classList.remove('form_error');
    state.parentNode.classList.remove('field_required');
    form.classList.add('success_field_msg');
  }
}

function validateinput(e) {
  var selected_input = e.target;
  var selected_input_val = selected_input.value;
  var selected_input_len = selected_input_val.length;

  var num_regex = /[\W\d]+/g;

  if (num_regex.test(selected_input_val)) {
    selected_input.classList.remove('form_success');
    selected_input.parentNode.classList.remove('form_field_valid');
    selected_input.parentNode.classList.remove('form_charlen_err');
    selected_input.parentNode.classList.remove('field_required');
    selected_input.classList.add('form_error');
    selected_input.parentNode.classList.add('form_hasno_err');
    allinputchecked = 0;
  } else if (!(selected_input_len > 1 && selected_input_len < 16)) {
    selected_input.classList.remove('form_success');
    selected_input.parentNode.classList.remove('form_field_valid');
    selected_input.parentNode.classList.remove('form_hasno_err');
    selected_input.classList.remove('form_error');
    selected_input.parentNode.classList.remove('field_required');
    selected_input.classList.add('form_error');
    selected_input.parentNode.classList.add('form_charlen_err');
    allinputchecked = 0;
  } else {
    selected_input.classList.remove('form_error');
    selected_input.parentNode.classList.remove('form_hasno_err');
    selected_input.parentNode.classList.remove('form_charlen_err');
    selected_input.parentNode.classList.remove('field_required');
    selected_input.classList.add('form_success');
    selected_input.parentNode.classList.add('form_field_valid');
    allinputchecked = 1;
  }
}

function menushowhide(e) {
  var clicked_element = e.target;
  if (clicked_element == hamburger) {
    nav_menu.classList.remove('hidemenu');
    close_menu_btn.classList.remove('hidemenu');
    nav_menu.classList.add('showmenu');
    close_menu_btn.classList.add('showmenu');
  }

  if (clicked_element == close_menu_btn) {
    nav_menu.classList.remove('showmenu');
    close_menu_btn.classList.remove('showmenu');
    nav_menu.classList.add('hidemenu');
    close_menu_btn.classList.add('hidemenu');
  }
}
