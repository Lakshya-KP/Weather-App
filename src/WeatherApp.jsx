import {useState} from "react";
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
  };

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg md:max-w-lg">
        <div className="md:flex">
          <div className="w-full p-5">
            <div className="text-center">
              <span className="text-lg text-blue-700 font-semibold">
                  Weather App
                </span>
                <h1 className="text-2xl font-bold text-green-700">Search for Weather</h1>
              </div>
              <SearchBox updateInfo={updateInfo} />
              <InfoBox info={weatherInfo} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
