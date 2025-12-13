function HourlyForecast() {
  return (
    <div className="w-[300px] bg-slate-800 rounded-lg border border-solid border-white/20 box-border p-5 flex flex-col g-5">
      {/* scroll */}
      <div className="flex flex-row justify-between items-center">
        <div>Hourly forecast</div>
        <button>Tuesday</button> {/* dropdown */}
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-snow.webp" alt="snow" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-slate-700 rounded-lg h-10 flex flex-row justify-between items-center px-3">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecast;
