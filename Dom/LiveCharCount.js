const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const limit = 100;

textBox.addEventListener("input", () => {
  const remaining = limit - textBox.value.length;
  counter.textContent = `Characters left: ${remaining}`;

  // Change color based on remaining count (bonus)
  if (remaining > 50) counter.style.color = "green";
  else if (remaining > 20) counter.style.color = "orange";
  else counter.style.color = "red";
});
