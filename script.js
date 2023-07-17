let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

function checkGuess() {
    let guessednumber = parseInt(userInput.value);
    if (guessednumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessednumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    } else if (guessednumber === randomNumber) {
        gameResult.textContent = "Congratulations!You Got it Right.";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Please provide Numeric Input";
        gameResult.style.backgroundColor = "Red";
    }

}