

//Function PlayGuessingGame();
let guess;
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let countOfGuesses = 0;

  for (let i = 0; i < totalGuesses; i++) {
    if (countOfGuesses === 0) {
      guess = prompt("Enter a number between 1 to 100");
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      }
      if (guess === null) {
        alert("You have chosen to exit the game !!");
        break;
      }
    }

    if (guess < numToGuess) {
      guess = prompt(`${guess} is too small. Guess a larger number`);
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      }
      if (guess === null) {
        alert("You have chosen to exit the game !!");
        break;
      }
    }

    if (guess > numToGuess) {
      guess = prompt(`${guess} is too larger. Guess a smaller number`);
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      }
      if (guess === null) {
        alert("You have chosen to exit the game !!");
        break;
      }
    }

    if (guess === "") {
      guess = prompt("Please enter a number");
    }

    if (isNaN(guess)) {
      guess = prompt("Please enter a number");
      countOfGuesses++;
      if (guess !== null) {
        guess = parseFloat(guess);
      }
      if (guess === null) {
        alert("You have chosen to exit the game !!");
        break;
      }
    }

    if (guess === numToGuess) {
      alert("You guessed the number correctly !!");
      break;
    }

    if (countOfGuesses === totalGuesses && guess !== numToGuess) {
      alert("You have used all your chances !!");
      break;
    }
  }
}

playGuessingGame(Math.floor(Math.random() * 10 + 1));
