import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <div className="bg-slate-950 text-white font-[DMSans]">
      <h1 className="text-5xl font-bold text-center p-[50px]">
        How's the sky looking today?
      </h1>
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
    </div>
  );
}

export default App;
