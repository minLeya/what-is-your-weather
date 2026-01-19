import "./App.css";
import SearchBar from "./components/SearchBar";
import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <div className="bg-[hsl(243,96%,9%)] text-white font-[DMSans]">
      <header>
        <h1 className="text-5xl font-bold text-center p-[50px]">
          How's the sky looking today?
        </h1>
      </header>

      <main>
        <SearchBar />

        <div className="flex flex-row justify-center gap-8">
          <div className="flex flex-col gap-5">
            <MainWeather />
            <WeatherDetails />
            <DailyForecast />
          </div>
          <div>
            <HourlyForecast />
          </div>
        </div>
      </main>

      <footer>
        <div className="text-center mt-10">
          Coded by <a href="https://github.com/minLeya" className="text-[hsl(240,6%,70%)]">Leya</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
