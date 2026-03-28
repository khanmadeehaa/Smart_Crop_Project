import { detectDeficiencyAI } from '../ai_server/detection.js';
import { getFertilizerRecommendation } from '../services/recommendation.js';
import { readSoilSensors, analyzeSoilData } from '../services/soil.js';
import { getWeatherForecast } from '../services/weather.js';
import { controlWaterMotor } from '../services/irrigation.js';
import { controlGreenhouse } from '../services/greenhouse.js';
import {
    detectPestRisk,
    getPesticideRecommendation,
    controlPesticideSprayer,
} from '../services/pest.js';

function analyzeCrop(leafFeatures, cropType, area) {

    // 1. AI Detection
    const aiResult = detectDeficiencyAI(leafFeatures ?? {});

    // 2. Recommendation
    const recommendation = getFertilizerRecommendation(aiResult.diagnosis, cropType, area);

    // 3. Soil Analysis
    const soilData = readSoilSensors();
    const soilAnalysis = analyzeSoilData(soilData);

    // 4. Weather Data
    const weather = getWeatherForecast();

    // 5. Irrigation Decision
    const motorStatus = controlWaterMotor(soilAnalysis.moisturePercent);

    // 6. Greenhouse Control
    const greenhouseActions = controlGreenhouse(weather.temperature, weather.humidity);

    // 7. Pest Risk Detection
    const pestRisk = detectPestRisk(aiResult.diagnosis, weather);

    // 8. Pesticide Recommendation
    const pesticidePlan = getPesticideRecommendation(pestRisk);

    // 9. Sprayer Control
    const sprayerStatus = controlPesticideSprayer(pestRisk);

    return {
        aiResult,
        recommendation,
        soilAnalysis,
        weather,
        motorStatus,
        greenhouseActions,
        pestRisk,
        pesticidePlan,
        sprayerStatus
    };
}

export { analyzeCrop };
