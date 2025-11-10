const products = [
  { name: "Laptop", category: "electronics" },
  { name: "T-shirt", category: "clothing" },
  { name: "Headphones", category: "electronics" },
  { name: "Jeans", category: "clothing" },
  { name: "Smartphone", category: "electronics" },
  { name: "Jacket", category: "clothing" },
  { name: "Camera", category: "electronics" },
  { name: "Sweater", category: "clothing" },
  { name: "Tablet", category: "electronics" },
  { name: "Shoes", category: "clothing" }
];

const list = document.getElementById("productList");
const search = document.getElementById("search");

function displayProducts(items) {
  list.innerHTML = "";
  items.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.name} (${p.category})`;
    list.appendChild(li);
  });
}

function filterProducts(category) {
  let filtered = products;
  if (category !== "all")
    filtered = products.filter(p => p.category === category);
  displayProducts(filtered);
}

search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

// Show all by default
displayProducts(products);
