async function getWeather(location) {
    const apiKey = '4PHWKX7KD7KPPLTZHF2MMWHSZ';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log('Clima en', location, ':', data);
            return data;
        } else {
            console.error('Error en la respuesta:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error al hacer fetch:', error);
    }
}

export { getWeather };