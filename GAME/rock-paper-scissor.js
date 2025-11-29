let round = 1;
let playerScore = 0;
let computerScore = 0;

function play(playerChoice){
    if(round > 10) return; // Stop after 10 rounds

    let options = ["rock", "paper", "scissors"];
    let compChoice = options[Math.floor(Math.random() * 3)];

    document.getElementById("computer").textContent = compChoice;

    let msg = "";

    if(playerChoice === compChoice){
        msg = "It's a draw!";
    }
    else if(
        (playerChoice === "rock" && compChoice === "scissors") ||
        (playerChoice === "paper" && compChoice === "rock") ||
        (playerChoice === "scissors" && compChoice === "paper")
    ){
        msg = "You win this round!";
        playerScore++;
    }
    else{
        msg = "Computer wins this round!";
        computerScore++;
    }

    document.getElementById("message").textContent = msg;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    round++;
    document.getElementById("round").textContent = round <= 10 ? round : 10;

    if(round > 10){
        setTimeout(finalResult, 500);
    }
}

function finalResult(){
    if(playerScore > computerScore){
        alert("🎉 You win the game!");
    } 
    else if(computerScore > playerScore){
        alert("😞 Computer wins the game!");
    } 
    else {
        alert("🤝 It's a tie!");
    }
}

function resetGame(){
    round = 1;
    playerScore = 0;
    computerScore = 0;

    document.getElementById("round").textContent = 1;
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("computerScore").textContent = 0;
    document.getElementById("computer").textContent = "-";
    document.getElementById("message").textContent = "Make your move!";

    alert("Game Reset!");
}
