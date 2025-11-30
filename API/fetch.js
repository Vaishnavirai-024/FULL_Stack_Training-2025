const tableBody = document.getElementById("userTableBody");
const loader = document.getElementById("loader");
const refreshBtn = document.getElementById("refreshBtn");

// Simple fetch function
async function loadUsers() {
    loader.style.display = "block";      // show loader
    tableBody.innerHTML = "";            // clear old data

    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Insert rows
    data.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;
        tableBody.appendChild(row);
    });

    loader.style.display = "none";       // hide loader
}

// Button click = refresh
refreshBtn.addEventListener("click", loadUsers);

// Load when page opens
loadUsers();
