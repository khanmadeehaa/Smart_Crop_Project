// irrigation.js

export function controlWaterMotor(moisture) {
    if (moisture < 20) {
        return "Motor ON";
    }
    if (moisture > 60) {
        return "Motor OFF";
    }
    return "No Change";
}
