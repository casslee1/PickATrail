//Switch to hamburger symbol navigation bar for small screens
function hamburgerNav() {
    let x = document.getElementById("navigationBar");
    if (x.className === "navigationBar") {
      x.className += " responsive";
    } else {
      x.className = "navigationBar";
    }
  }
  
  //Navigation bar
  function goHome() {
    window.location.href = "./index.html";
  }
  
  function goToAbout() {
    window.location.href = "./about.html";
  }
  
  function goToPick() {
    window.location.href = "./pickATrail.html";
  }
  
  function goToTrack() {
    window.location.href = "./trackATrail.html";
  }
  
  function goToLogin() {
    window.location.href = "./login.html";
  }

//Validate account creation form
//Use form inputs to set constants
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Event listener to start validation when form is submitted
form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

//Set for error in entry
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

//Set entry as succussful
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

//Check if the email address is valid
const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

//check validity of entries and set to true or false
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let userNameValid = true;
    let emailValid = true;
    let passwordValid = true;
    let password2Valid = true;

    if(usernameValue === '') {
        setError(username, 'Username is required');
        userNameValid = false;
    } else if (usernameValue.length < 5 ) {
        setError(username, 'Username must be at least 5 characters');
        userNameValid = false; 
    } else {
        setSuccess(username);
        userNameValid = true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
        emailValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        emailValid = false;
    } else {
        setSuccess(email);
        emailValid = true;
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
        passwordValid = false;
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 characters');
        passwordValid = false;
    } else {
        setSuccess(password);
        passwordValid = true;
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
        password2Valid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
        password2Valid = false;
    } else {
        setSuccess(password2);
        password2Valid = true;
    }

    //When all entries are true send account created alert
    if(userNameValid === true && emailValid === true && passwordValid === true && password2Valid === true){
        alert ("Account Created");
    }
}
