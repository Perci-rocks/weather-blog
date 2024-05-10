import React from 'react'
import './WeatherApp.css'
import { Link } from "react-router-dom";
import weather from "../Assets/weather.png";
import humidity from "../Assets/humidity.png";
import wind from "../Assets/wind.png";
import search from "../Assets/search.png";

 const WeatherApp = () => {

    let api_key="584f4367f224e8974bdb9cdd6a1c6ec6"
    const search = async () => {
const element =document.getElementsByClassName("city")
   if(element[0].value==="")
   {
    return 0; 
   }
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
   
   let response = await fetch(url);
    let data = await response.json();

    const humidity =document.getElementsByClassName("humidity-percent")
    const wind =document.getElementsByClassName("wind-rate")
    const temp =document.getElementsByClassName("temp")
    const location=document.getElementsByClassName("location")

    humidity[0].innerHTML = data.main.humidity;
    wind[0].innerHTML = data.wind.speed;
    temp[0].innerHTML = data.main.temp;
    location[0].innerHTML = data.name;  
}

  return (
    <div className='Weathercontainer'>
        
            <Link className="Back" to="/Home">
              Back
            </Link>
          
        <div className="Weathertop-bar">
            <input type="text" className="city" placeholder='Enter City Name' />
            <div className="search" onClick={()=>{search()}}>
                <img src={search} alt="" />
        </div>
        </div>
        
        <div className="weather">
        <img src={weather} alt="" />
            </div>
        <div className="temp">25°C</div>
        <div className="location">Buea</div>
        <div className="data-container">
        <div className="element">
        <img src={humidity} alt="" className="images" />
            <div className="data">
            <div className="humidity-percent">65%</div>
            <div className="text">humidity</div>
            </div>
            </div>   
        
        <div className="element">
    <img src={wind} alt="" className="images" />
            <div className="data">
            <div className="wind-rate">18km/hr</div>
            <div className="text">wind speed</div>
            </div>
            </div>   
        </div>
        </div>

        
  );
};
export default WeatherApp;