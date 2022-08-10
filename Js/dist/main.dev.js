"use strict";

var bSignIn = document.querySelector('.bsignin');
var bLogin = document.querySelector('.blogin');
var bSignUp = document.querySelector('.bsignup');
var loginForm = document.querySelector('.login');
var signUpForm = document.querySelector('.signup');
var content = document.querySelector('.content');
var email = document.querySelector('#email');
var password = document.querySelectorAll('.password');
var uName = document.querySelectorAll('.name');
var check = document.querySelectorAll('.signup__form span');
var label = document.querySelectorAll('label');
var loader = document.querySelector('.loader');
var welcome = document.querySelector('.welcome'); //Global Variables

var userList = [];
var isChange = true;
var isSave = false; //Add Event Listeners

bSignIn.addEventListener('click', changeForm);
bSignUp.addEventListener('click', saveSignup);
email.addEventListener('keyup', validateEmail);
password[0].addEventListener('keyup', validatePassword);
password[1].addEventListener('keyup', lPassword);
uName[0].addEventListener('keyup', validateName);
uName[1].addEventListener('keyup', lName);
bLogin.addEventListener('click', function () {
  loginName();
  loginPassword();

  if (isSave) {
    loginUser();
  } else {
    alert('User or password is incorrect');
  }

  ;
}); //Functions

function validateEmail() {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.value.length > 0) {
    label[1].style.opacity = 1;
    label[1].style.backgroundColor = '#fff';
    label[1].style.top = '23%';

    if (re.test(email.value)) {
      email.style.borderColor = 'green';
      check[1].style.display = 'block';
      isSave = true;
    } else {
      check[1].style.display = 'none';
      isSave = true;
    }

    ;
  } else {
    email.blur();
    check[1].style.display = 'none';
    label[1].style.opacity = 1;
    label[1].style.backgroundColor = 'transparent';
    label[1].style.top = '32%';
    isSave = false;
  }

  ;
}

function validatePassword() {
  var re = /^[a-z A-Z 0-9]/;

  if (password[0].value.length > 0) {
    label[2].style.opacity = 1;
    label[2].style.backgroundColor = '#fff';
    label[2].style.top = '49%';

    if (re.test(password[0].value) && password[0].value.length > 7) {
      password[0].style.borderColor = 'green';
      check[2].style.display = 'block';
      check[3].style.display = 'none';
      isSave = true;
    } else {
      password[0].style.borderColor = 'red';
      check[3].style.display = 'block';
      check[2].style.display = 'none';
      isSave = false;
    }

    ;
  } else {
    password[0].blur();
    check[3].style.display = 'none';
    check[2].style.display = 'none';
    label[2].style.opacity = 0.7;
    label[2].style.backgroundColor = 'transparent';
    label[2].style.top = '58%';
    isSave = false;
  }

  ;
}

function validateName() {
  var re = /^[a-z A-Z]/;

  if (uName[0].value.length > 0) {
    label[0].style.opacity = 1;
    label[0].style.backgroundColor = '#fff';
    label[0].style.top = '-3%';

    if (re.test(uName[0].value)) {
      uName[0].style.borderColor = 'green';
      check[0].style.display = 'block';
      isSave = true;
    } else {
      uName[0].style.borderColor = 'red';
      check[0].style.display = 'none';
      isSave = false;
    }

    ;
  } else {
    uName[0].blur();
    check[0].style.display = 'none';
    label[0].style.opacity = 0.7;
    label[0].style.backgroundColor = 'transparent';
    label[0].style.top = '6%';
    isSave = false;
  }

  ;
}

function changeForm() {
  if (isChange) {
    content.style.left = '60%';
    bSignIn.innerHTML = 'Sign Up';
    bSignIn.style.zIndex = '1';
    signUpForm.style.display = 'none';
    loginForm.style.display = 'flex';
    loginForm.parentNode.style.justifyContent = 'flex-start';
    isChange = false;
  } else {
    content.style.left = '0';
    bSignIn.innerHTML = 'Sign In';
    bSignIn.style.zIndex = '1';
    signUpForm.style.display = 'flex';
    loginForm.style.display = 'none';
    loginForm.parentNode.style.justifyContent = 'flex-end';
    isChange = true;
  }

  ;
}

function loginPassword() {
  if (password[1].value === userList[0].password) {
    password[1].style.borderColor = 'green';
    isSave = true;
  } else {
    password[1].style.borderColor = 'red';
    isSave = false;
  }

  ;
}

function lPassword() {
  if (password[1].value.length > 0) {
    label[4].style.opacity = 1;
    label[4].style.backgroundColor = '#fff';
    label[4].style.top = '27%';
    isSave = true;
  } else {
    password[1].blur();
    label[4].style.opacity = 0.7;
    label[4].style.backgroundColor = 'transparent';
    label[4].style.top = '37%';
  }

  ;
}

function loginName() {
  if (uName[1].value === userList[0].name) {
    uName[1].style.borderColor = 'green';
    isSave = true;
  } else {
    uName[1].style.borderColor = 'red';
    isSave = false;
  }

  ;
}

function lName() {
  if (uName[1].value.length > 0) {
    label[3].style.opacity = 1;
    label[3].style.backgroundColor = '#fff';
    label[3].style.top = '-3%';
    isSave = true;
  } else {
    uName[1].blur();
    label[3].style.opacity = 0.7;
    label[3].style.backgroundColor = 'transparent';
    label[3].style.top = '6%';
  }

  ;
}

function loginUser() {
  new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, 2000);
  }).then(function () {
    loader.style.display = 'none';
    loginForm.style.display = 'none';
    content.style.display = 'none';
    welcome.style.display = 'flex';
    welcome.childNodes[5].innerHTML = " ".concat(userList[0].name.toUpperCase());
  });
}

function saveSignup() {
  if (isSave) {
    loader.style.display = 'block';
    var user = {
      name: uName[0].value,
      email: email.value,
      password: password[0].value
    };
    userList.push(user);
    localStorage.user = JSON.stringify(user);
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    }).then(function () {
      loader.style.display = 'none';
      alert('Sign Up Successful');
      changeForm();
    });
  } else {
    alert('Please fill all fields');
  }

  ;
}