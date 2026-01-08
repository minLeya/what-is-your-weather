import { useState } from "react";

function HourlyForecast() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [selectedDay, setSelectedDay] = useState("Monday");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[300px] bg-[hsl(243,27%,20%)] rounded-lg border border-solid border-white/20 box-border p-5 flex flex-col g-5 text-base">
      {/* scroll */}
      <div className="flex flex-row justify-between items-center pb-5 pt-2 font-medium text-base">
        <div>Hourly forecast</div>

        <div className="relative">
          <button
              onClick={() => setIsOpen(!isOpen)}
              className="px-3 py-1 rounded-md bg-[hsl(243,23%,24%)] border border-white/20 hover:bg-[hsl(243,23%,30%)]"
          >
                {selectedDay} ▾
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 bg-[hsl(243,27%,20%)] rounded-md border border-white/20">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => {
                    setSelectedDay(day);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10 hover:rounded-md transition"
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-snow.webp" alt="snow" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
          {/* сколько штук сколько часов от 12AM till 12PM */}
          <div className="flex flex-row items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="../src/assets/images/icon-sunny.webp" alt="sunny" />
            </div>

            <div className="items-center">3 PM</div>
          </div>

          <div>68°</div>
        </div>

        <div className="bg-[hsl(243,23%,24%)] rounded-lg h-12 flex flex-row justify-between items-center px-3 border border-white/20">
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
