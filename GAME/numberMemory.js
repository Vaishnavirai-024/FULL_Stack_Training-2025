let randomNumber = "";
let round = 0;
let score = 0;

function startRound() {
    if (round >= 10) {
        document.getElementById("result").innerText = "Game Over!";
        return;
    }

    round++;
    document.getElementById("result").innerText = "";
    document.getElementById("userInput").value = "";

    randomNumber = Math.floor(1000 + Math.random() * 9000); 
    const box = document.getElementById("numberBox");

    box.style.display = "block";
    box.innerText = randomNumber;

    setTimeout(() => {
        box.style.display = "none";
    }, 3000);  // hide after 3 seconds
}

function checkAnswer() {
    let user = document.getElementById("userInput").value;

    if (!user) return;

    if (user == randomNumber) {
        score++;
        document.getElementById("result").innerText = "Correct!";
    } else {
        document.getElementById("result").innerText = "Incorrect! Number was: " + randomNumber;
    }

    document.getElementById("score").innerText = "Score: " + score + "/10";
}
