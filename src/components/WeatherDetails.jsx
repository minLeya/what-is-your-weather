function WeatherDetails() {
  return (
    <div className="w-[800px] flex flex-row justify-between"> {/* flex row */}
      <div className="w-44 h-24 bg-gray-400 rounded-lg">
        <div>Feels like</div>
        <div>64</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-gray-400 rounded-lg">
        <div>Humidity</div>
        <div>46%</div> {/* api */}
      </div>


      <div className="w-44 h-24 bg-gray-400 rounded-lg">
        <div>Wind</div>
        <div>9 mph</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-gray-400 rounded-lg">
        <div>Precipitation</div>
        <div> 0 in</div> {/* api */}
      </div>

    </div>
  );
}

export default WeatherDetails;
