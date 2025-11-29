let colors = ["red", "green", "blue", "yellow"];
let score = 0;
let round = 1;
let correctColor = "";

newWord();

function newWord(){
    let textColor = colors[Math.floor(Math.random() * colors.length)];
    let wordColor = colors[Math.floor(Math.random() * colors.length)];

    correctColor = wordColor;  // PLAYER must match this!

    let word = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("word").textContent = word;

    document.getElementById("word").style.color = wordColor;
}

function choose(color){
    if(round > 10) return;

    if(color === correctColor){
        score++;
        document.getElementById("msg").textContent = "Correct!";
    } else {
        document.getElementById("msg").textContent = "Wrong!";
    }

    document.getElementById("score").textContent = score;

    round++;
    document.getElementById("round").textContent = round <= 10 ? round : 10;

    if(round > 10){
        setTimeout(() => alert("Game Over! Final Score: " + score), 300);
    } else {
        newWord();
    }
}

function resetGame(){
    score = 0;
    round = 1;
    
    document.getElementById("score").textContent = 0;
    document.getElementById("round").textContent = 1;
    document.getElementById("msg").textContent = "";

    newWord();
}
