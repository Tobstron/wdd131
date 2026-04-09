// INCREMENT COUNTER
let count = localStorage.getItem("reviews");

if (!count) {
  count = 0;
}

count++;
localStorage.setItem("reviews", count);

// DISPLAY
document.getElementById("counter").textContent = count;

// FOOTER
document.getElementById("year").textContent = new Date().getFullYear();