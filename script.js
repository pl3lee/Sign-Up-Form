function checkPassword() {
    if (password.value != confirmPassword.value) {
        passwordsDontMatch.style.opacity = "100";
        createAccountButton.removeAttribute("form");
    } else {
        passwordsDontMatch.style.opacity = "0";
        createAccountButton.setAttribute("form", "mainform");
    }
}
let passwordsDontMatch = document.querySelector('#passwordsDontMatch');
passwordsDontMatch.style.opacity = "0";
let createAccountButton = document.querySelector('.create-account');
createAccountButton.addEventListener("click", checkPassword);
let password = document.querySelector('#userPassword');
let confirmPassword = document.querySelector('#userPasswordConfirm');

