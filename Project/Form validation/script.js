const form = document.querySelector("#form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('sumbit', (e) => {
    
    if(!validateInputs()){
        e.preventDefault();
    }
})


function validateInputs() {
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()
    let isSuccess = true;

    //Username
    if (usernameVal === '') {
        isSuccess = false;
        setError(username,'username is required')
    }
    else if(usernameVal !== usernameVal.toUpperCase()){
        isSuccess= false;
        setError(username,"Name must be captial letter only")
    }
    else {
        setSuccess(username)
    }

    //Email
    if (emailVal === '') {
        isSuccess = false;
        setError(email,'Email is required')
    }
    else if (!validateEmail(emailVal)) {
        isSuccess = false;
        setError(email,'please enter a valid email')
    }
    else {
        setSuccess(email)
    }

    //Password
    if (passwordVal === '') {
        isSuccess = false;
        setError(password,'password is requried')
    }
    else if (passwordVal.length < 8) {
        isSuccess = false;
        setError(password, 'password must be atleast 8 long')
    }
    else {
        setSuccess(password)
    }

    //Confirm Password
    if (cpasswordVal === '') {
        isSuccess = false;
        setError(cpassword, 'confirm password is requried')
    }

    else if (cpasswordVal !== passwordVal) {
        isSuccess = false;
        setError(cpassword, 'password doesnot match')
    }
    else {
        setSuccess(cpassword)
    }
 
    return isSuccess; 

}

//element-password ,msg-password is requried
function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
     

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error");
    
    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
};

