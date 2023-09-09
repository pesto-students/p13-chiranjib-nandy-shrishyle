function isStrongPassword(passwordInput) {
  let is8Characters = false;
  let isDoesNotContainPasswordString = false;
  let isContainsOneUpperCharacter = false;

  //Check if the password length is more than 8 characters.
  if (passwordInput.length >= 8) {
    is8Characters = true;
  }

  //Check if the password includes the string "password".
  if (passwordInput.includes("password")) {
    isDoesNotContainPasswordString = false;
  } else {
    isDoesNotContainPasswordString = true;
  }

  //Check if the entered password contains atleast one Capital Character.
  if (/[A-Z]/.test(passwordInput)) {
    isContainsOneUpperCharacter = true;
  } else {
    isContainsOneUpperCharacter = false;
  }

  //If Block to check if all set conditions for password strength are met.
  if (is8Characters && isDoesNotContainPasswordString && isContainsOneUpperCharacter) {
    console.log("Password is Strong");
  } else {
    console.log("Password is NOT Strong");
  }
}

isStrongPassword("Hello World");
