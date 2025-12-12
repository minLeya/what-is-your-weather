function MainWeather() {
  return (
    <div className="relative inline-block">
      <img
        src="/src/assets/images/bg-today-large.svg"
        alt="Weather background"
        className="w-full h-auto"
      />

      {/* positions */}
      <div className="">
        {" "}
        {/* слева */}
        <div>Belin, Germany</div>
        <div>Thursday, Dec 11, 2025 </div>
      </div>

      <div>
        <img src="" alt="" /> {/* в зависимости от погоды... */}
        68* {/* данные из сайта */}
      </div>
    </div>
  );
}

export default MainWeather;
