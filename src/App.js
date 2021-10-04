import React from "react";

const api = {
  key: `${process.env.REACT_APP_KEY}`,
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search__box">
          <input type="text" className="search__bar" placeholder="Search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
