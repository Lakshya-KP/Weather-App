import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Aligarh",
    feelsLike: 21.4,
    humidity: 44,
    temp: 22,
    tempMax: 22,
    tempMin: 22,
    weather: "overcast clouds",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App</h2>
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info={weatherInfo} /> 
    </div>
  );
}
