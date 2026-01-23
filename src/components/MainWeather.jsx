import { mainWeatherMock } from "../data/mainWeather";
import { weatherIcons } from "../utils/weatherIcons";

function MainWeather() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative inline-block">
      <img
        src="assets/images/bg-today-large.svg"
        alt="Weather background"
        className="w-full h-auto"
      />

      <div className="absolute inset-0 pl-6 pt-[110px] flex flex-col gap-2">
        <div className="text-2xl font-bold">{mainWeatherMock.city}, {mainWeatherMock.country}</div>
        <div className="text-sm opacity-90">{currentDate}</div>
      </div>

      <div className="flex flex-row items-center gap-4 absolute right-6 top-1/2 transform -translate-y-1/2">
        <div>
          <img
            src={weatherIcons[mainWeatherMock.icon]}
            alt={mainWeatherMock.icon}
            className="w-16 h-16"
          />
        </div>

        <div className="text-6xl font-bold italic">{mainWeatherMock.temp}°</div>
      </div>
    </div>
  );
}

export default MainWeather;
