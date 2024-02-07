export default function InfoBox({ info }) {
  return (
    <div className="mt-10">
      <div className="bg-blue-50 p-5 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">
            Weather Information - {info.weather}
          </h2>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-green-900">
              {info.city}{" "}
              {info.weather.includes('cloud') ? <CloudIcon className="text-blue-400" /> : (info.weather.includes('rain') ? <CloudRainIcon className="text-blue-400" />: (info.temp > 22 ? <SunIcon className="text-orange-400"/> : <CloudSnowIcon className="text-blue-400"/>))}
            </h3>
            <span className="text-sm text-gray-500">
              {info.temp}°C
            </span>
          </div>
          <div className="mt-2 space-y-1 text-sm">
            <p>
               <span className="font-medium text-blue-700">
                Temperature:
              </span>{" "}
              {info.temp}°C
            </p>
            <p>
               <span className="font-medium text-blue-700">
                Humidity:
              </span>{" "}
              {info.humidity}
            </p>
            <p>
               <span className="font-medium text-blue-700">
                Min. Temperature:
              </span>{" "}
              {info.tempMin}°C
            </p>
            <p>
               <span className="font-medium text-blue-700">
                Max. Temperature:
              </span>{" "}
              {info.tempMax}°C
            </p>
            <p className="mt-3 text-gray-600">
              The Weather can be described as {info.weather} & feels like{" "}
              {info.feelsLike}°C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloudIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}
function CloudRainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M16 14v6" />
        <path d="M8 14v6" />
        <path d="M12 16v6" />
      </svg>
    )
  }
  
  
  function CloudSnowIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
        <path d="M8 15h.01" />
        <path d="M8 19h.01" />
        <path d="M12 17h.01" />
        <path d="M12 21h.01" />
        <path d="M16 15h.01" />
        <path d="M16 19h.01" />
      </svg>
    )
  }
  
  
  function SunIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>
    )
}
