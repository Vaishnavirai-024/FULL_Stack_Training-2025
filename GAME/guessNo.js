let secret = Math.floor(Math.random() * 100) + 1;
let tries = 5;

function checkGuess(){
    if(tries <= 0){
        return;
    }

    let userGuess = Number(document.getElementById("guess").value);
    let msg = "";

    if(userGuess === secret){
        msg = "🎉 Congratulations! You guessed it right.";
        tries = 0;
    }
    else if(userGuess > secret){
        msg = "Your guess is larger than the actual number.";
        tries--;
    }
    else{
        msg = "Your guess is smaller than the actual number.";
        tries--;
    }

    document.getElementById("message").textContent = msg;
    document.getElementById("tries").textContent = tries;

    if(tries === 0 && userGuess !== secret){
        document.getElementById("message").textContent =
            `❌ Game Over! The number was ${secret}`;
    }
}

function resetGame(){
    secret = Math.floor(Math.random() * 100) + 1;
    tries = 5;
    document.getElementById("tries").textContent = 5;
    document.getElementById("message").textContent = "";
    document.getElementById("guess").value = "";
    alert("Game Reset!");
}
