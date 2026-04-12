// MENU TOGGLE
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  if (menuButton.textContent === "☰") {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});

// FOOTER DATES
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;

// LOCAL STORAGE VISITS
let visits = localStorage.getItem("visits") || 0;
visits++;
localStorage.setItem("visits", visits);

const visitDisplay = document.getElementById("visits");
if (visitDisplay) {
  visitDisplay.textContent = `Visits: ${visits}`;
}

// =======================
// 🚀 FLEET DATA (ARRAY)
// =======================

const ships = [
  {
    name: "Axiom One loading up",
    type: "carrier",
    size: "large",
    image: "images/ship1.webp"
  },
  {
    name: "Axiom Gunship refueling",
    type: "gunship",
    size: "large",
    image: "images/ship2.webp"
  },
  {
    name: "Axiom Executive Explorer",
    type: "explorer",
    size: "medium",
    image: "images/ship3.webp"
  }
];

// =======================
// 🧱 DISPLAY FUNCTION
// =======================

const container = document.getElementById("fleet-container");

function displayShips(shipList) {
  if (!container) return;

  container.innerHTML = "";

  shipList.forEach(ship => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${ship.image}" alt="${ship.name}" loading="lazy">
      <h3>${ship.name}</h3>
      <p>Type: ${ship.type}</p>
      <p>Size: ${ship.size}</p>
    `;

    container.appendChild(card);
  });
}

// =======================
// 🎛️ FILTER BUTTONS
// =======================

const allBtn = document.getElementById("all");
const largeBtn = document.getElementById("large");
const explorerBtn = document.getElementById("explorer");

if (allBtn) {
  allBtn.addEventListener("click", () => displayShips(ships));
}

if (largeBtn) {
  largeBtn.addEventListener("click", () => {
    const filtered = ships.filter(ship => ship.size === "large");
    displayShips(filtered);
  });
}

if (explorerBtn) {
  explorerBtn.addEventListener("click", () => {
    const filtered = ships.filter(ship => ship.type === "explorer");
    displayShips(filtered);
  });
}

// INITIAL LOAD
displayShips(ships);