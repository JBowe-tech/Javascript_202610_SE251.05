// JavaScript Document

document.getElementById("submit-btn").addEventListener("click", function () {
    //RegEX Patterns
    const namePattern = /^[A-Za-z-]+$/;
    const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    //Inputs
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");


    //Errors
    const fnError = document.getElementById("fn-error");
    const lnError = document.getElementById("ln-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");

    //Paragraph Tag
    const firstNameP = firstName.parentElement;
    const lastNameP = lastName.parentElement;
    const emailP = email.parentElement;
    const phoneP = phone.parentElement;


    //Clear Errors
    fnError.textContent = "";
    lnError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";

    let isValid = true;

    //First Name Validation
    if(firstName.value === ""){
        fnError.textContent = "* Please enter your first name.";
        isValid = false
    }else if(!namePattern.test(firstName.value)){
        fnError.textContent = "* First name can only contain letters and dashes.";
        firstNameP.className = "error"
        isValid = false;
    }

    //Last Name validation
    if(lastName.value === ""){
        lnError.textContent = "* Please enter your last name.";
        isValid = false
    }else if(!namePattern.test(lastName.value)){
        lnError.textContent = "* Last name can only contain letters and dashes.";
        lastNameP.className = "error"
        isValid = false;

    }

    //Email Validation
    if(email.value === ""){
        emailError.textContent = "* Please enter your email.";
        isValid = false
    }else if(!emailPattern.test(email.value)){
        emailError.textContent = "* Please enter valid email.";
        emailP.className = "error"
        isValid = false;
    }

    //Phone Validation
    if(phone.value === ""){
        phoneError.textContent = "* Please enter your phone number.";
        isValid = false
    }else if(!phonePattern.test(phone.value)){
        phoneError.textContent = "* Phone number must be 10 digits and dashes (eg: xxx-xxx-xxxx).";
        phoneP.className = "error"        
        isValid = false;
    }

    //Valid Inputs Displays
    if(isValid){
        document.getElementById("form").style.display ="none";
        document.getElementById("confirmation").style.display ="block";
         document.getElementById("info").innerHTML = 
         "<b>First Name:</b> " + firstName.value + "<br>" + 
         "<b>Last Name:</b> " + lastName.value + "<br>" +
         "<b>Email:</b> " + email.value + "<br>" + 
         "<b>Phone:</b> " + phone.value;

    }
});