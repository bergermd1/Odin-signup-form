window.onload = () => {
    const email = document.querySelector(`#email`);
    const emailError = document.querySelector(`#email+.error`);
    
    const pwd = document.querySelector(`#pwd`);
    const confirmPwd = document.querySelector(`#confirm-pwd`);
    const pwdError = document.querySelector(`#pwd+.error`);

    email.addEventListener(`input`, (e) => {
        if (email.checkValidity()) {
            emailError.textContent = ``;
        } else {
            emailError.textContent = `Invalid email`;
        }
    })

    pwd.addEventListener(`input`, (e) => {
        console.log(pwd.value);
        console.log(confirmPwd.value);
        console.log(pwdError);
        
        if (pwd.value === confirmPwd.value) {
            pwdError.textContent = ``;
        } else {
            pwdError.textContent = `Passwords do not match`;
        }
    })

    confirmPwd.addEventListener(`input`, (e) => {
        console.log(pwd.value);
        console.log(confirmPwd.value);
        console.log(pwdError);
        
        if (pwd.value === confirmPwd.value) {
            pwdError.textContent = ``;
        } else {
            pwdError.textContent = `Passwords do not match`;
        }
    })


}

