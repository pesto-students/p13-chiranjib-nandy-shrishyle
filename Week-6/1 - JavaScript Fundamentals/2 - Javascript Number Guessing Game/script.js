//Function to run when the user chooses to Exit the game by pressing "cancel button" on the prompt.
function chosenToExit() {
  alert("You have chosen to exit the game !!");
}

//Function PlayGuessingGame();
let guess;
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let countOfGuesses = 0;
  console.log(numToGuess);

  for (let i = 0; i < totalGuesses; i++) {
    //If Block to run when the first guess is entered.
    if (countOfGuesses === 0) {
      guess = prompt("Enter a number between 1 to 100");
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      } else if (guess === null) {
        chosenToExit();
        break;
      }
    }

    //If Block to run when guess is smaller than the number to guess.
    if (guess < numToGuess) {
      guess = prompt(`${guess} is too small. Guess a larger number`);
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      } else if (guess === null) {
        chosenToExit();
        break;
      }
    }

    //If Block to run when the guess is larger than the number to guess.
    if (guess > numToGuess) {
      guess = prompt(`${guess} is too larger. Guess a smaller number`);
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      } else if (guess === null) {
        chosenToExit();
        break;
      }
    }

    //If Block to run when guessed input value is not a Number
    if (isNaN(guess)) {
      guess = prompt("Please enter a number");
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      } else if (guess === null) {
        chosenToExit();
        break;
      }
    }

    //If Block to run when a no input is entered and OK button is pressed on prompt
    if (guess === "") {
      guess = prompt("Please enter a number");
    }

    //If Block to run when the guess is correct.
    if (guess === numToGuess) {
      alert("You guessed the number correctly !!");
      break;
    }

    //If block to run when the user runs out of 10 chances to guess the number correctly.
    if (countOfGuesses === totalGuesses && guess !== numToGuess) {
      alert("You have used all your chances !!");
      break;
    }
  }
}

playGuessingGame(Math.floor(Math.random() * 100 + 1));
