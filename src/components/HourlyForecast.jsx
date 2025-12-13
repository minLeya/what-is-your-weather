function HourlyForecast() {
  return (
    <div>
      {" "}
      {/* scroll */}
      <div className="flex flex-row justify-between">
        <div>Hourly forecas</div>
        <button>Tuesday</button> {/* dropdown */}
      </div>

      <div> {/* сколько штук сколько часов от 12AM till 12PM */}
        {/* left */}
        <div>
          {/* image */}
          <div>3 PM</div>
        </div>

        {/* right */}
        <div>68*</div>
      </div>
    </div>
  );
}

export default HourlyForecast;