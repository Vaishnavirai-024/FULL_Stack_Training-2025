const startBtn = document.getElementById("startBtn");
const stepsList = document.getElementById("stepsList");

// Create 3 Promises, each resolves after 1 sec
function step1() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 1 done"), 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 2 done"), 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Step 3 done"), 1000);
    });
}

function highlight(li) {
    li.classList.add("bold");
}

async function runSteps() {
    stepsList.innerHTML = ""; // clear previous steps

    // STEP 1
    let li1 = document.createElement("li");
    li1.textContent = "Running Step 1...";
    highlight(li1);
    stepsList.appendChild(li1);

    const s1 = await step1();
    li1.textContent = s1;

    // STEP 2
    let li2 = document.createElement("li");
    li2.textContent = "Running Step 2...";
    highlight(li2);
    stepsList.appendChild(li2);

    const s2 = await step2();
    li2.textContent = s2;

    // STEP 3
    let li3 = document.createElement("li");
    li3.textContent = "Running Step 3...";
    highlight(li3);
    stepsList.appendChild(li3);

    const s3 = await step3();
    li3.textContent = s3;
}

startBtn.addEventListener("click", runSteps);
