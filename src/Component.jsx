export default function Component() {
    return (
      <div className="dark min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Weather App</h1>
            <p className="text-gray-400">Your local weather, simplified.</p>
          </div>
          <div className="mb-6">
            <div className="flex justify-center">
              <input
                className="w-full max-w-sm px-4 py-2 bg-gray-800 rounded text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Search city..."
                type="text"
              />
            </div>
          </div>
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-semibold">San Francisco, CA</h2>
              <div className="flex items-center justify-center mt-2">
                <SunIcon className="w-12 h-12 text-yellow-300" />
                <div className="ml-4">
                  <h3 className="text-4xl font-bold">72°F</h3>
                  <p className="text-gray-400">Sunny</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <div className="flex flex-col items-center">
              <p>Mon</p>
              <CloudIcon className="w-8 h-8 text-gray-400 mt-2" />
              <p className="mt-2">68°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Tue</p>
              <CloudRainIcon className="w-8 h-8 text-blue-400 mt-2" />
              <p className="mt-2">65°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Wed</p>
              <CloudSnowIcon className="w-8 h-8 text-blue-300 mt-2" />
              <p className="mt-2">32°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Thu</p>
              <CloudIcon className="w-8 h-8 text-gray-400 mt-2" />
              <p className="mt-2">60°F</p>
            </div>
            <div className="flex flex-col items-center">
              <p>Fri</p>
              <SunIcon className="w-8 h-8 text-yellow-300 mt-2" />
              <p className="mt-2">70°F</p>
            </div>
          </div>
        </div>
      </div>
    )
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
    )
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
  