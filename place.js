// Valeurs statiques pour l'instant
const temperature = 8; // °C
const windSpeed = 10; // km/h

// Fonction pour calculer le wind chill
function calculateWindChill(temp, speed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(speed, 0.16) +
        0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
}

// Mise à jour du wind chill
const windChillElement = document.querySelector("#windchill");
if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Mise à jour de l'année actuelle
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Mise à jour de la date de dernière modification
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;
