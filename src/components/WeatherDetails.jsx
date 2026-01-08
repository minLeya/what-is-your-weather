function WeatherDetails() {
  return (
    <div className="w-[800px] flex flex-row justify-between">
      <div className="w-44 h-24 bg-[hsl(243,27%,20%)] rounded-lg border border-solid border-white/20 box-border flex flex-col justify-between p-[15px]">
        <div className="text-sm text-white/90">Feels like</div>
        <div className="text-2xl">64</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-[hsl(243,27%,20%)] rounded-lg border border-solid border-white/20 box-border flex flex-col justify-between p-[15px]">
        <div className="text-sm text-white/90">Humidity</div>
        <div className="text-2xl">46%</div> {/* api */}
      </div>


      <div className="w-44 h-24 bg-[hsl(243,27%,20%)] rounded-lg border border-solid border-white/20 box-border flex flex-col justify-between p-[15px]">
        <div className="text-sm text-white/90">Wind</div>
        <div className="text-2xl">9 mph</div> {/* api */}
      </div>

      <div className="w-44 h-24 bg-[hsl(243,27%,20%)] rounded-lg border border-solid border-white/20 box-border flex flex-col justify-between p-[15px]">
        <div className="text-sm text-white/90">Precipitation</div>
        <div className="text-2xl"> 0 in</div> {/* api */}
      </div>

    </div>
  );
}

export default WeatherDetails;
