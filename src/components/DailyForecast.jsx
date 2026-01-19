import { dailyForecastMock } from "../data/dailyForecast";
import { weatherIcons } from "../utils/weatherIcons";

function DailyForecast() {
  return (
    <div className="text-white">
      <div className="text-lg mb-3 mt-5 font-medium">Daily forecast</div>
      <div className="w-[800px] h-[150] flex flex-row justify-between gap-4 box-border">

        {dailyForecastMock.map((day, index) => (
          <div className="bg-[hsl(243,27%,20%)] border border-solid border-white/20 p-2.5 box-border rounded-lg flex flex-col justify-center text-center">
            <div>{day.day}</div>
            <div className="w-19 h-19 flex items-center justify-center">
              <img src={weatherIcons[day.icon]} alt={day.icon}/>
            </div>
            <div className="flex flex-row justify-between">
              <div>{day.high}°</div>
              <div>{day.low}°</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;