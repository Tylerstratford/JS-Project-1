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

//Age


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


// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;
// let firstNameValidated = false;

let validated = false;


//Functions and event listener***

// First name validation
firstName.addEventListener("keyup", function(e) {
    validateMinLengthFirstName(e.target);
})

function validateMinLengthFirstName(element) {
    let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
    if (!regEx.test(element.value)) {
        errorFirstName.hidden = false
        validated = false;
        firstName.style.outlineColor ="red";
        return false
    } else {
        errorFirstName.hidden = true;
        console.log(validated);
        firstName.style.outlineColor = "green";
        return validated = true;
    }
}


// Last name validation
// *******fix issue with two names********
lastName.addEventListener("keyup", function(e) {
    validateMinLengthLastName(e.target);
})

function validateMinLengthLastName(element) {
    let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
    if (!regEx.test(element.value)) {
        errorLastName.hidden = false
        validated = false;
        lastName.style.outlineColor ="red";
        return true
    } else {
        errorLastName.hidden = true;
        console.log(validated);
        lastName.style.outlineColor = "green";
        return true;
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
        email.style.outlineColor = "red";
        return false;
    } else {
        errorEmail.hidden = true;
        email.style.outlineColor = "green";
        return true;
    }
}

//Age Validation


//Address Validation
    //postcal code
    postalCode.addEventListener("keyup", function(e) {
        validatePostalCode(e.target);
    })

    // *****fix regex*****
    function validatePostalCode(element) {
        let regEx = /^(?=(?:[^A-Za-z]*[A-Za-z]){2})(?![^\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,]*[\d~`?!^*¨ˆ;@=$%{}\[\]|\\\/<>#“.,])\S+(?: \S+){0,2}$/;
        if (!regEx.test(element.value)) {
            errorPostalCode.hidden = false
            validated = false;
            postalCode.style.outlineColor ="red";
            return true
        } else {
            errorPostalCode.hidden = true;
            console.log(validated);
            postalCode.style.outlineColor = "green";
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
            validated = false;
            city.style.outlineColor ="red";
            return true
        } else {
            errorCity.hidden = true;
            console.log(validated);
            city.style.outlineColor = "green";
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
        password.style.outlineColor = "red";
        return false
    } else {
        errorPassword.hidden = true;
        password.style.outlineColor = "green";
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
        repeatPassword.style.outlineColor = "red";
        return false

    } else {
        errorPasswordMatch.hidden = true;
        repeatPassword.style.outlineColor = "green";
        return true
    }
}
// console.log(validated);