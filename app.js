let moonlight = 0;
let moonstones = 0;

const moonlightDisplay = document.getElementById("moonlight");

const gatherButton = document.getElementById("gatherButton");
const moonstoneButton = document.getElementById("buyMoonstone");

gatherButton.addEventListener("click", gatherMoonlight);
moonstoneButton.addEventListener("click", restoreMoonstone);

function gatherMoonlight() {
    moonlight++;
    updateDisplay();
}

function restoreMoonstone() {

    if (moonlight >= 10) {

        moonlight -= 10;
        moonstones++;

        alert("The first Moonstone has awakened.");

        updateDisplay();

    } else {

        alert("You need more Moonlight.");

    }

}

function updateDisplay() {

    moonlightDisplay.textContent = moonlight;

}