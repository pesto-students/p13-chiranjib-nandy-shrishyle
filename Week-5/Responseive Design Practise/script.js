let randomNumber = Math.floor(Math.random() * 10 + 1);
let guess = 0;
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let value = parseInt(prompt("Enter a number between 1 to 100."));
  debugger;
  guess++;
  if (value == null) {
    return 0;
  } else if (value == "" || isNaN(value)) alert("Please enter a number");
  else if (value == randomNumber) {
    return guess;
  } else if (guess == totalGuesses) {
    return 0;
  } else if (value < randomNumber) {
    alert(value + " is too small. Guess a larger number.");
    playGuessingGame(10);
  } else if (value > randomNumber) {
    alert(value + "  is too large. Guess a smaller number.");
    playGuessingGame(10);
  }
}
console.log(playGuessingGame(10));
