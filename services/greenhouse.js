// greenhouse.js

export function controlGreenhouse(temp, humidity) {
    let actions = [];

    if (temp > 30) actions.push("Cooling Fan ON");
    if (temp < 18) actions.push("Heater ON");

    if (humidity < 40) actions.push("Humidifier ON");
    if (humidity > 80) actions.push("Dehumidifier ON");

    return actions.length ? actions : ["Environment Optimal"];
}
