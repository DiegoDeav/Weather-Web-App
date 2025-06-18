import { getWeather } from "../hooks/useWeather.js";
import weatherCard from "../components/WeatherCard.js";

export default async function Home() {
    const weatherData = await getWeather('Bogotá');
    const card = weatherCard(weatherData);
    return card;
}