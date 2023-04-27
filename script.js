const validateForm = (event) => {
    event.preventDefault();
    let password = document.getElementById('password').value;
    let RePassword = document.getElementById('Re_password').value;
    let email = document.getElementById('email').value;

    console.log(password)
    console.log(RePassword)

    if (password  === "") {

        document.getElementById('EnterPassword').style.color = 'red'
        let result = document.createElement('p')
        result.innerHTML = "Please Enter Password"
        let paragraph = document.getElementById('EnterPassword').appendChild(result)

        function hideParagraph() {
            paragraph.style.display = "none";
        }
        setTimeout(hideParagraph, 2000);
    }



    else if (password === RePassword) {
        document.getElementById('Password-mach').style.color = 'green'
        let result = document.createElement('p')
        result.innerHTML = "Password Mach"
        let paragraph = document.getElementById('Password-mach').appendChild(result)
        function hideParagraph() {
            paragraph.style.display = "none";
        }
        setTimeout(hideParagraph, 2000);

    }

    else {
        document.getElementById('password-noMach').style.color = 'red'
        let result = document.createElement('p')
        result.innerHTML = "Password does not Match"
        let paragraph = document.getElementById('password-noMach').appendChild(result)
        function hideParagraph() {
            paragraph.style.display = "none";
        }
        setTimeout(hideParagraph, 2000);
    }

}

const ConfermShowPassword = () => {


    let passwordConferm = document.getElementById("Re_password")

    if (passwordConferm.type === "password") {
        passwordConferm.type = "text";
    } else {
        passwordConferm.type = "password";
    }

}

const ShowPassword = () => {
    let passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }

}