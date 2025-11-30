const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");

async function loadImages() {
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * 1000);

    const img = document.createElement("img");
    img.src = `https://picsum.photos/300/300?random=${randomNum}`;

    img.onload = () => {
      img.classList.add("fade-in");
    };

    gallery.appendChild(img);
  }
}

// Load first images
loadImages();

// Load more on click
loadMoreBtn.addEventListener("click", loadImages);
