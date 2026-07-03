// -------------------------
// Moonloop
// Version 0.2
// -------------------------

// Game State

let moonlight = 0;
let moonstones = 0;

// Elements

const moonlightDisplay = document.getElementById("moonlight");
const moonstoneDisplay = document.getElementById("moonstoneCount");
const statusMessage = document.getElementById("statusMessage");

const hero = document.querySelector(".hero");
const buyMoonstoneButton = document.getElementById("buyMoonstone");

// -------------------------
// Display
// -------------------------

function updateDisplay() {

    moonlightDisplay.textContent = Math.floor(moonlight);

    moonstoneDisplay.textContent = moonstones;

}

// -------------------------
// Journal
// -------------------------

function setStatus(message) {

    statusMessage.textContent = message;

}

// -------------------------
// Clicking
// -------------------------

function gatherMoonlight() {

    moonlight++;

    updateDisplay();

}

// Click anywhere in the hero section

hero.addEventListener("click", gatherMoonlight);

// -------------------------
// Moonstones
// -------------------------

function restoreMoonstone() {

    if (moonlight >= 10) {

        moonlight -= 10;

        moonstones++;

        if (moonstones === 1) {

            setStatus("🌙 The first Moonstone has awakened.");

        } else {

            setStatus("✨ Another Moonstone begins to glow.");

        }

        updateDisplay();

    } else {

        setStatus("Not enough Moonlight.");

    }

}

buyMoonstoneButton.addEventListener("click", restoreMoonstone);

// -------------------------
// Passive Generation
// -------------------------

function gameTick() {

    moonlight += moonstones;

    updateDisplay();

}

setInterval(gameTick, 1000);

// -------------------------
// Initial Display
// -------------------------

updateDisplay();