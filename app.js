let light = 0;

const lightDisplay = document.getElementById("light");
const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
  light++;
  lightDisplay.textContent = "Light: " + light;
});