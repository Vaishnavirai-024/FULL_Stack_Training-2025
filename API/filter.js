const searchBox = document.getElementById("searchBox");
const grid = document.getElementById("grid");

let products = []; // will store all products after fetch

// Fetch products from FakeStore API
async function loadProducts() {
    const url = "https://fakestoreapi.com/products"; 
    const res = await fetch(url);
    products = await res.json();
    displayProducts(products);
}

// Display products in the grid
function displayProducts(list) {
    grid.innerHTML = ""; // clear previous items

    list.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${item.title}</h4>
            <p class="price">$${item.price}</p>
        `;
        grid.appendChild(card);
    });
}

// Debounce function (Bonus)
function debounce(fn, delay) {
    let timer;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), delay);
    };
}

// Filter products as user types
function filterProducts() {
    const text = searchBox.value.toLowerCase();
    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(text)
    );
    displayProducts(filtered);
}

// Apply debounce to search input
searchBox.addEventListener("input", debounce(filterProducts, 300));

loadProducts();
