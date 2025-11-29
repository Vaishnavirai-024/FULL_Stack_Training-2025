// const ball = document.getElementById("ball");
// let x = 0, y = 0, dx = 2, dy = 2;
// let move;

// function moveBall() {
//   const box = document.getElementById("box");
//   x += dx;
//   y += dy;

//   if (x + ball.offsetWidth >= box.offsetWidth || x <= 0) dx = -dx;
//   if (y + ball.offsetHeight >= box.offsetHeight || y <= 0) dy = -dy;

//   ball.style.left = x + "px";
//   ball.style.top = y + "px";
// }

// document.getElementById("startBtn").onclick = () => {
//   if (!move) move = setInterval(moveBall, 10);
// };

// document.getElementById("stopBtn").onclick = () => {
//   clearInterval(move);
//   move = null;
// };



const ball=document.getElementById("ball");
let x=0,y=0,dx=2,dy=2;
let move;

function moveBall(){
  const box=document.getElementById("box");
  x+=dx;
  y+=dy;
  if(x + ball.offsetWidth>=box.offsetWidth || x<=0) dx = -dx;
  if(y + ball.offsetHeight>=box.offsetHeight || y<=0) dy = -dy;

  ball.style.left=x + "px";
  ball.style.top=y + "px";
}
document.getElementById("startBtn").onclick=()=>{
  if(!move) move=setInterval(moveBall,10);
};
document.getElementById("stopBtn").onclick=()=>{
  clearInterval(move);
  move=null;
};
