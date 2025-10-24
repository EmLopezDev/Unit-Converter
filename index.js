const userInput = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
const meterFeetEl = document.getElementById("meter-feet");
const literGallonEl = document.getElementById("liter-gallon");
const kiloPoundsEl = document.getElementById("kilo-pound");

function metersToFeet(num) {
    const feet = num * 3.281;
    return feet.toFixed(3);
}

function feetToMeters(num) {
    const meters = num / 3.281;
    return meters.toFixed(3);
}

function litersToGallon(num) {
    const gallons = num * 0.264;
    return gallons.toFixed(3);
}

function gallonToLiters(num) {
    const liters = num / 0.264;
    return liters.toFixed(3);
}

function kilosToPounds(num) {
    const pounds = num * 2.204;
    return pounds.toFixed(3);
}

function poundsToKilo(num) {
    const kilo = num / 2.204;
    return kilo.toFixed(3);
}

function convertAndDisplayLenth(value) {
    meterFeetEl.textContent = `
		${value} meters = ${metersToFeet(value)} feet |
		${value} feet = ${feetToMeters(value)} meters
	`;
}

function convertAndDisplayVolume(value) {
    literGallonEl.textContent = `
		${value} liters =
		${litersToGallon(value)} gallons |
		${value} gallons = ${gallonToLiters(value)} liters
	`;
}

function convertAndDisplayMass(value) {
    kiloPoundsEl.textContent = `
		${value} kilos = ${kilosToPounds(value)} pounds |
		${value} pounds = ${poundsToKilo(value)} kilos
	`;
}

function renderConversion(value) {
    if (value) {
        convertAndDisplayLenth(value);
        convertAndDisplayVolume(value);
        convertAndDisplayMass(value);
    }
}

convertButton.addEventListener("click", () => {
    renderConversion(userInput.value);
    userInput.value = "";
});

convertButton.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        renderConversion(userInput.value);
        userInput.value = "";
    }
});

userInput.addEventListener("keydown", (evt) => {
    if (evt.key === "Enter") {
        renderConversion(userInput.value);
        userInput.value = "";
    }
});

userInput.addEventListener("input", () => {
    if (userInput.value.length > 3) {
        userInput.value = userInput.value.slice(0, 3);
    }
});

/*
Conversion reference
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
