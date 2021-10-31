// Global variables***
//name
let errorFirstName = document.getElementById('errorFirstName');
let errorLastName = document.getElementById('errorLastName');
let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
errorFirstName.hidden = true;
errorLastName.hidden = true;


//Email
let errorEmail = document.getElementById('errorEmail');
let email = document.getElementById('email');
errorEmail.hidden = true;
let validPassword = false;
let validPasswordMatch = false;


//Age
let age = document.getElementById('age');
let ageError = document.getElementById('errorAge');
ageError.hidden = true;

//Address
let postalCode = document.getElementById('postalCode');
let city = document.getElementById('city')
let errorPostalCode = document.getElementById('errorPostalCode')
let errorCity = document.getElementById('errorCity');
errorPostalCode.hidden = true;
errorCity.hidden = true;

//Password
let errorPassword = document.getElementById('errorPassword')
let errorPasswordMatch = document.getElementById('errorPasswordMatch');
let password = document.getElementById('password');
let repeatPassword = document.getElementById('repeatPassword');
errorPassword.hidden = true;
errorPasswordMatch.hidden = true;

//Functions and event listener***

//Submit
let submit = document.getElementById('submit');
submit.disabled = true;

let form = document.getElementById('form')


form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log('submitted')
})



// First name validation
firstName.addEventListener("keyup", function(e) {
    validateMinLengthFirstName(e.target);
})

function validateMinLengthFirstName(element) {
    let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
    if (!regEx.test(element.value)) {
        errorFirstName.hidden = false
        firstName.style.border = "1px solid red";
        submit.disabled = true;
        return false
    } else {
        errorFirstName.hidden = true;
        firstName.style.border = "1px solid green";
        submit.disabled = false
        return true;
    }
}


// Last name validation
lastName.addEventListener("keyup", function(e) {
    validateMinLengthLastName(e.target);
})

function validateMinLengthLastName(element) {
    let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
    if (!regEx.test(element.value)) {
        errorLastName.hidden = false
        lastName.style.border = "1px solid red";
        submit.disabled = true
        return false
    } else {
        errorLastName.hidden = true;
        lastName.style.border = "1px solid green"
        submit.disabled = false
        return true
    }
}


//Email Validation
email.addEventListener("keyup", function(e) {
    validateEmail(e.target);
})

function validateEmail(element) {
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regEx.test(element.value)) {
        errorEmail.hidden = false;
        email.style.border = "1px solid red";
        submit.disabled = true;
        return false;
    } else {
        errorEmail.hidden = true;
        email.style.border = "1px solid green"
        submit.disabled = false
        return true;
    }
}


//Age Validation
age.addEventListener('blur', function(e) {
    calculateAge(e.target);
})

function calculateAge(){

    let userAge = document.getElementById('age').value;  
    console.log(userAge);
    
    let birthDate = new Date(userAge);
     console.log(" birthDate"+ birthDate);
    
    let difference=Date.now() - birthDate.getTime(); 
    let ageDate = new Date(difference); 
    let calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (calculatedAge <= 18 ) {
        console.log(`${calculatedAge} not old enough`);
        errorAge.hidden = false;
        age.style.border = "1px solid red";
        submit.disabled = true;
        return false
    } else {
        console.log(`${calculatedAge}  old enough`);
        errorAge.hidden = true;
        age.style.border = "1px solid green"
        submit.disabled = false
        return true
    }
}


//Address Validation
//postcal code
postalCode.addEventListener("keyup", function(e) {
    validatePostalCode(e.target);
})

function validatePostalCode(element) {
    let regEx = /^[0-9a-zA-Z]{5}/;
    if (!regEx.test(element.value) || element.value.length > 5) {
        errorPostalCode.hidden = false
        postalCode.style.border = "1px solid red";
        submit.disabled = true;
        return true
    } else {
        errorPostalCode.hidden = true;
        postalCode.style.border = "1px solid green"
        submit.disabled = false
        return true;
    }
}


//city
city.addEventListener("keyup", function(e) {
    validateCity(e.target);
})
function validateCity(element) {
    let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
    if (!regEx.test(element.value)) {
        errorCity.hidden = false
        city.style.border = "1px solid red";
        submit.disabled = true;
        return true
    } else {
        errorCity.hidden = true;
        city.style.border = "1px solid green"
        submit.disabled = false
        return true;
    }
}


//Password Validation
password.addEventListener("keyup", function(e){
    validatePassword(e.target);
})

function validatePassword(element) {
    const reg= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if(!reg.test(element.value)) {
        errorPassword.hidden = false;
        password.style.border = "1px solid red";
        submit.disabled = true;
        return false
    } else {
        errorPassword.hidden = true;
        password.style.border = "1px solid green"
        submit.disabled = false
        return true;
    }
}


//Password Match
repeatPassword.addEventListener("keyup", function(e) {
    passwordMatch(e.target);
})

function passwordMatch (element) {
    if (password.value !== repeatPassword.value) {
        errorPasswordMatch.hidden = false;
        repeatPassword.style.border = "1px solid red";
        submit.disabled = true;
        return false

    } else {
        errorPasswordMatch.hidden = true;
        repeatPassword.style.border = "1px solid green"
        submit.disabled = false
        return true
    }
}

