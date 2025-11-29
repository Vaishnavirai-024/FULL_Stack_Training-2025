let randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 5;

function play() {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let chanceText = document.getElementById("chances");

    if (tries === 0) {
        message.innerText = "Game Over! The number was " + randomNumber;
        return;
    }

    if (guess === randomNumber) {
        message.innerText = "🎉 Congratulations! You guessed it right.";
        tries = 0;
    } 
    else if (guess > randomNumber) {
        message.innerText = "Your guess is larger than the actual number.";
        tries--;
    } 
    else if (guess < randomNumber) {
        message.innerText = "Your guess is smaller than the actual number.";
        tries--;
    }

    if (tries === 0 && guess !== randomNumber) {
        message.innerText = "Game Over! The number was " + randomNumber;
    }

    chanceText.innerText = "Chances left: " + tries;
}
