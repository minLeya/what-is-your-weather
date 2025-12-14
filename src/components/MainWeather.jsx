function MainWeather() {
  return (
    <div className="relative inline-block">
      <img
        src="/src/assets/images/bg-today-large.svg"
        alt="Weather background"
        className="w-full h-auto"
      />

      <div className="absolute inset-0 pl-6 pt-[110px] flex flex-col gap-2">
        <div className="text-2xl font-bold">Belin, Germany</div>
        <div className="text-sm opacity-90">Thursday, Dec 11, 2025 </div>
      </div>

      <div className="flex flex-row items-center gap-4 absolute right-6 top-1/2 transform -translate-y-1/2">
        <div>
          <img
            src="../src/assets/images/icon-snow.webp"
            alt="snow"
            className="w-16 h-16"
          />
        </div>

        <div className="text-6xl font-bold italic">68*</div>
      </div>
    </div>
  );
}

export default MainWeather;
