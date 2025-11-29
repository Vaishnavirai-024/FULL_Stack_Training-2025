// const circle = document.getElementById("circle");
// const container = document.getElementById("container");
// const btn = document.getElementById("moveBtn");

// btn.addEventListener("click", () => {
//   let pos = 0;
//   const id = setInterval(() => {
//     if (pos >= container.offsetWidth - circle.offsetWidth) {
//       clearInterval(id);
//     } else {
//       pos++;
//       circle.style.left = pos + "px";
//     }
//   }, 5);
// });


const container=document.getElementById("container");
const circle=document.getElementById("circle");
const btn=document.getElementById("moveBtn");

btn.addEventListener("click",()=>{
  let pos=0;
  const id=setInterval(()=>{
    if(pos>=container.offsetWidth-circle.offsetWidth){
      clearInterval(id);
    }else{
      pos++;
      circle.style.left=pos+"px";
    }
  },5);
});
