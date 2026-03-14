const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
nav.classList.toggle("open");

if(menuButton.textContent === "☰"){
menuButton.textContent = "X";
}else{
menuButton.textContent = "☰";
}
});

const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

document.getElementById("lastModified").textContent =
"Last Modified: " + document.lastModified;
