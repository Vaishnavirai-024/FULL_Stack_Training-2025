let round = 1, s1 = 0, s2 = 0;
let correctAnswer = 0;

generateQuestion();

function generateQuestion(){
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let ops = ["+", "-", "×"];
    let op = ops[Math.floor(Math.random() * ops.length)];

    if(op === "+") correctAnswer = a + b;
    if(op === "-") correctAnswer = a - b;
    if(op === "×") correctAnswer = a * b;

    document.getElementById("question").textContent = `${a} ${op} ${b}`;
}

function checkAnswer(){
    if(round > 10) return;

    let ans1 = Number(document.getElementById("p1").value);
    let ans2 = Number(document.getElementById("p2").value);

    if(ans1 === correctAnswer) s1++;
    if(ans2 === correctAnswer) s2++;

    document.getElementById("s1").textContent = s1;
    document.getElementById("s2").textContent = s2;

    document.getElementById("msg").textContent =
        `Correct Answer: ${correctAnswer}`;

    round++;
    document.getElementById("round").textContent = round <= 10 ? round : 10;

    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";

    if(round > 10){
        setTimeout(showWinner, 500);
    } else {
        generateQuestion();
    }
}

function showWinner(){
    if(s1 > s2) alert("🎉 Player 1 Wins!");
    else if(s2 > s1) alert("🎉 Player 2 Wins!");
    else alert("🤝 It's a Tie!");
}

function resetGame(){
    round = 1;
    s1 = 0;
    s2 = 0;

    document.getElementById("round").textContent = 1;
    document.getElementById("s1").textContent = 0;
    document.getElementById("s2").textContent = 0;
    document.getElementById("msg").textContent = "";
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";

    generateQuestion();
}
