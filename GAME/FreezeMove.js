let currentWord = "";
let round = 0;
let score = 0;
let freezeTimeout;

function startGame() {
    round = 0;
    score = 0;
    document.getElementById("score").innerText = "";
    nextRound();
}

function nextRound() {
    if (round >= 10) {
        document.getElementById("word").innerText = "Game Over!";
        document.getElementById("score").innerText = "Final Score: " + score;
        return;
    }

    round++;

    // Randomly choose FREEZE or MOVE
    currentWord = Math.random() < 0.5 ? "FREEZE" : "MOVE";
    document.getElementById("word").innerText = currentWord;

    // If FREEZE → auto-disappear after 1 second
    if (currentWord === "FREEZE") {
        clearTimeout(freezeTimeout);
        freezeTimeout = setTimeout(() => {
            document.getElementById("word").innerText = "";
            nextRound();
        }, 1000);
    }
}

function handleClick() {
    if (currentWord === "") return;

    if (currentWord === "MOVE") {
        score++;
    } else { 
        score--; 
    }

    document.getElementById("score").innerText = "Score: " + score;

    // Move to next round immediately after click
    nextRound();
}
