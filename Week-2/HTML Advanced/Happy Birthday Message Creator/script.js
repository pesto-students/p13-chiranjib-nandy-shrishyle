let emailInputField = document.getElementById("message");
let userInputEmail = emailInputField.value;
let regex = new RegExp([a - zA - Z0 - 9 - _.] + @[a - zA - Z0 - 9 -] + (?:.[a - zA - Z0 - 9 -] +) *);

let validateEmail = () => {
    let result = regex.test(userInputEmail);
    if (result) {
        emailInputField.classList.add("green");
    } else {
         emailInputField.classList.add("red");
    }
}

emailInputField.addEventListener("input", validateEmail);
