function WeatherDetails() {
  return (
    <div className="w-[800px] flex flex-row justify-between">
      <div className="w-44 h-24 bg-slate-800 rounded-lg border border-solid border-white">
        <div>Feels like</div>
        <div>64</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-slate-800 rounded-lg">
        <div>Humidity</div>
        <div>46%</div> {/* api */}
      </div>


      <div className="w-44 h-24 bg-slate-800 rounded-lg">
        <div>Wind</div>
        <div>9 mph</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-slate-800 rounded-lg">
        <div>Precipitation</div>
        <div> 0 in</div> {/* api */}
      </div>

    </div>
  );
}

export default WeatherDetails;
