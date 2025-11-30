const loadBtn = document.getElementById("loadBtn");
const statusText = document.getElementById("status");
const postList = document.getElementById("postList");

// Fake delayed Promise (2 seconds)
function getPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate random failure (for retry bonus)
            const success = Math.random() > 0.3;

            if (success) {
                resolve([
                    "Introduction to JavaScript",
                    "Understanding Promises",
                    "Mastering Async/Await",
                    "DOM Manipulation Basics"
                ]);
            } else {
                reject("Failed to load posts.");
            }

        }, 2000);
    });
}

async function loadPosts() {
    statusText.textContent = "Loading posts...";
    postList.innerHTML = "";
    loadBtn.disabled = true;

    try {
        const posts = await getPosts();

        statusText.textContent = "Posts loaded successfully!";

        posts.forEach(post => {
            const li = document.createElement("li");
            li.textContent = post;
            postList.appendChild(li);
        });

    } catch (error) {
        statusText.style.color = "red";
        statusText.textContent = error + " Click again to retry.";
    }

    loadBtn.disabled = false;
}

loadBtn.addEventListener("click", loadPosts);
