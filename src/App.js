import React from "react";
import { ImSearch } from "react-icons/im";
import { WiCelsius } from "react-icons/wi";
import "./App.css";




function App() {


  return(
    <div>      
      <script src="./script.js" defer></script>
      <div className="card">
        <div className="search">
          <input type="text" className="search-bar"></input>
          <button ><ImSearch  ></ImSearch></button>
        </div>
      
      <div className="weather">
        <h2 className="city"> Weather in denver</h2>
        <div class="temp">51<WiCelsius></WiCelsius></div>
        <img className="icon"></img>
        <div className="description"></div>
        <div className="humidity"> Humidity 60%</div>
        <div className="wind"> Wind 10km/h</div>
      </div>
      </div>
    </div>
  )
}
export default App;
