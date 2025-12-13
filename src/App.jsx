import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <h1 className="text-4xl font-bold text-center pt-[50px]">How's the sky looking today?</h1>
      <SearchBar/>
      {/*  грид чтобы уложить все нормально*/}
      <MainWeather/>
      <WeatherDetails/>
      <HourlyForecast/>
      <DailyForecast/>
    </div>
  );
}

export default App;