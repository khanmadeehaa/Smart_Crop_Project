// recommendation.js

function getFertilizerRecommendation(diagnosis, cropType = 'generic', area = 1) {
    switch (diagnosis) {
        case 'Nitrogen Deficiency Detected':
            return {
                fertilizer: 'Urea / Ammonium Nitrate',
                quantity: `${50 * area} kg/ha`,
                timing: 'Apply during vegetative stage'
            };
        case 'Phosphorus Deficiency Detected':
            return {
                fertilizer: 'Superphosphate (DAP)',
                quantity: `${30 * area} kg/ha`,
                timing: 'Apply early growth stage'
            };
        case 'Potassium Deficiency Detected':
            return {
                fertilizer: 'Potassium Sulfate',
                quantity: `${35 * area} kg/ha`,
                timing: 'Apply in split doses'
            };
        default:
            return {
                fertilizer: 'No action needed',
                quantity: '0 kg/ha',
                timing: 'Maintain regular care'
            };
    }
}

export { getFertilizerRecommendation };
