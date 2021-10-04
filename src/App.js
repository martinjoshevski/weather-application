import React from "react";

const api = {
  key: `${process.env.REACT_APP_KEY}`,
  base: "https://api.openweathermap.org/data/2.5",
};
const dateBuilder = (n) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[n.getDay()];
  let date = n.getDate();
  let month = months[n.getMonth()];
  let year = n.getFullYear();
  return `${day} ${date} ${month} ${year}`;
};
function App() {
  return (
    <div className="app">
      <main>
        <div className="search__box">
          <input type="text" className="search__bar" placeholder="Search..." />
        </div>
        <div className="location__box">
          <div className="location">London, UK</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather__box">
          <div className="temp">15&deg;c</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
