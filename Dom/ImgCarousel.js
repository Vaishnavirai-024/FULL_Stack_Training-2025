const images = document.querySelectorAll("#carousel img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const carousel = document.getElementById("carousel");

let index = 0;
let interval = setInterval(nextImage, 3000);

function showImage(i) {
  images.forEach(img => img.classList.remove("active"));
  images[i].classList.add("active");
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

// Bonus: Pause slideshow on hover
carousel.addEventListener("mouseover", () => clearInterval(interval));
carousel.addEventListener("mouseout", () => interval = setInterval(nextImage, 3000));
