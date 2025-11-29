let round = 1;
let s1 = 0;
let s2 = 0;

function playRound(){
    if(round > 10) return;

    let n1 = Number(document.getElementById("p1").value);
    let n2 = Number(document.getElementById("p2").value);

    if(n1 < 1 || n1 > 10 || n2 < 1 || n2 > 10){
        alert("Enter numbers between 1 and 10 only!");
        return;
    }

    let sum = n1 + n2;
    let msg = "";

    if(sum % 2 === 0){
        s1++;
        msg = `Sum = ${sum} (Even) → Player 1 scores!`;
    } else {
        s2++;
        msg = `Sum = ${sum} (Odd) → Player 2 scores!`;
    }

    document.getElementById("result").textContent = msg;
    document.getElementById("s1").textContent = s1;
    document.getElementById("s2").textContent = s2;

    round++;
    document.getElementById("round").textContent = round <= 10 ? round : 10;

    if(round > 10){
        setTimeout(showWinner, 500);
    }
}

function showWinner(){
    if(s1 > s2){
        alert("🎉 Player 1 Wins the Game!");
    } else if(s2 > s1){
        alert("🎉 Player 2 Wins the Game!");
    } else {
        alert("🤝 It's a Tie!");
    }
}

function resetGame(){
    round = 1;
    s1 = 0;
    s2 = 0;

    document.getElementById("round").textContent = 1;
    document.getElementById("s1").textContent = 0;
    document.getElementById("s2").textContent = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";

    alert("Game Reset!");
}
