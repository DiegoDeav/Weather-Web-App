export default function weatherCard(data) {
    return `
        <div class="weather-card">
            <h2>${data.address}</h2>
            <p>Temperatura: ${data.currentConditions.temp}°C</p>
            <p>Condición: ${data.currentConditions.conditions}</p>
            <p>Humedad: ${data.currentConditions.humidity}%</p>
            <p>Viento: ${data.currentConditions.windspeed} km/h</p>
        </div>
    `;
}