// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// PRODUCT ARRAY
const products = [
  { id: "p1", name: "Gaming Laptop" },
  { id: "p2", name: "Mechanical Keyboard" },
  { id: "p3", name: "Wireless Mouse" },
  { id: "p4", name: "4K Monitor" },
  { id: "p5", name: "Headphones" }
];

// POPULATE SELECT
const select = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});