// pesticide.js

function detectPestRisk(aiDiagnosis, weather) {
    // Simple rule-based logic (can be AI later)

    if (aiDiagnosis.includes("spots") || aiDiagnosis.includes("damage")) {
        return "High";
    }

    if (weather.humidity > 70 && weather.temperature > 25) {
        return "Medium"; // humid + warm = pest friendly
    }

    return "Low";
}

function getPesticideRecommendation(riskLevel) {
    switch (riskLevel) {
        case "High":
            return {
                action: "Spray pesticide immediately",
                type: "Broad-spectrum pesticide",
                frequency: "Every 5-7 days"
            };
        case "Medium":
            return {
                action: "Preventive spraying recommended",
                type: "Organic pesticide (Neem oil)",
                frequency: "Weekly"
            };
        default:
            return {
                action: "No pesticide needed",
                type: "None",
                frequency: "Monitor regularly"
            };
    }
}

// Optional: Automatic Sprayer Control
function controlPesticideSprayer(riskLevel) {
    if (riskLevel === "High") {
        return "Sprayer ON";
    }
    return "Sprayer OFF";
}

module.exports = {
    detectPestRisk,
    getPesticideRecommendation,
    controlPesticideSprayer
};
