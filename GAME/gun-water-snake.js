let round = 1;
let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    if (round > 10) return;

    const choices = ["gun", "water", "snake"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("playerChoice").innerText =
        "You chose: " + format(playerChoice);

    document.getElementById("computerChoice").innerText =
        "Computer chose: " + format(computerChoice);

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw!";
    }
    else if (
        (playerChoice === "gun" && computerChoice === "snake") ||
        (playerChoice === "snake" && computerChoice === "water") ||
        (playerChoice === "water" && computerChoice === "gun")
    ) {
        result = "You WIN this round!";
        playerScore++;
    } else {
        result = "Computer WINS this round!";
        computerScore++;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("score").innerText =
        "Score → You: " + playerScore + " | Computer: " + computerScore;

    document.getElementById("roundText").innerText = "Round: " + round + " / 10";

    round++;

    if (round === 11) {
        endGame();
    }
}

function endGame() {
    let finalMessage = "";

    if (playerScore > computerScore) finalMessage = "🏆 YOU WIN the Game!";
    else if (playerScore < computerScore) finalMessage = "💻 Computer Wins the Game!";
    else finalMessage = "🤝 Game Draw!";

    document.getElementById("result").innerText = finalMessage;

    document.getElementById("resetBtn").style.display = "block";
}

function resetGame() {
    round = 1;
    playerScore = 0;
    computerScore = 0;

    document.getElementById("roundText").innerText = "Round: 1 / 10";
    document.getElementById("playerChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("result").innerText = "";
    document.getElementById("score").innerText = "";
    document.getElementById("resetBtn").style.display = "none";
}

function format(choice) {
    if (choice === "gun") return "Gun 🔫";
    if (choice === "water") return "Water 💧";
    if (choice === "snake") return "Snake 🐍";
}
