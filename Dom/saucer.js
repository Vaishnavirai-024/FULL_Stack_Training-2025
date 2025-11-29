const liquid = document.getElementById("liquid");
const btn = document.getElementById("fillBtn");
let filled = false;

btn.addEventListener("click", () => {
  if (!filled) {
    liquid.style.height = "99%";
    btn.textContent = "Empty Cup";
  } else {
    liquid.style.height = "0%";
    btn.textContent = "Pour Tea/Coffee";
  }
  filled = !filled;
});
