import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "ef0f55fe12b6459b32c9072b2b2d6afd";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="mt-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="city">
        City Name
      </label>
      <div className="mt-1">
        <form onSubmit={handleSubmit}>
          <TextField
            className="w-full rounded-md border-blue-300 shadow-sm"
            id="city"
            required
            value={city}
            onChange={handleChange}
          />
          <div className="mt-4">
          <Button
            type="submit"
            className="w-full mt-4 bg-green-200 hover:bg-green-450 text-white"
            color="success"
            variant="contained"
            >
            Search
          </Button>
        </div>
        </form>
      </div>
    </div>
  );
}
