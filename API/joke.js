const setupText = document.getElementById("setup");
const punchlineText = document.getElementById("punchline");
const nextBtn = document.getElementById("nextBtn");

function getJoke() {
    // Disable button while fetching
    nextBtn.disabled = true;
    setupText.textContent = "Loading...";
    punchlineText.textContent = "";

    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(joke => {
            setupText.textContent = joke.setup;
            punchlineText.textContent = joke.punchline;
            nextBtn.disabled = false;   // Enable button again
        })
        .catch(() => {
            setupText.textContent = "Failed to load joke!";
            punchlineText.textContent = "";
            nextBtn.disabled = false;
        });
}

// Button = fetch new joke
nextBtn.addEventListener("click", getJoke);
