import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import MainWeather from "./components/MainWeather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-800">
      <h1 className="text-4xl font-bold text-white-600">How's the sky looking today?</h1>
      <SearchBar/>
      {/*  грид чтобы уложить все нормально*/}
      <MainWeather/>
      <WeatherDetails/>
    </div>
  );
}

export default App;