// soil.js

function readSoilSensors() {
    return {
        moisturePercent: 27.5,
        nitrogen: 15,
        phosphorus: 8,
        potassium: 17
    };
}

function analyzeSoilData(sensorData, cropRequirements = {}) {
    const defaults = {
        moistureMin: 20,
        moistureMax: 60,
        nitrogen: 20,
        phosphorus: 10,
        potassium: 15
    };

    const req = { ...defaults, ...cropRequirements };

    const deficiencies = [];

    if (sensorData.nitrogen < req.nitrogen) deficiencies.push('Nitrogen');
    if (sensorData.phosphorus < req.phosphorus) deficiencies.push('Phosphorus');
    if (sensorData.potassium < req.potassium) deficiencies.push('Potassium');

    let moistureStatus = 'Optimal';
    if (sensorData.moisturePercent < req.moistureMin) moistureStatus = 'Low';
    if (sensorData.moisturePercent > req.moistureMax) moistureStatus = 'High';

    return {
        deficiencies,
        moistureStatus,
        moisturePercent: sensorData.moisturePercent,
        nutrients: sensorData
    };
}

export { readSoilSensors, analyzeSoilData };
