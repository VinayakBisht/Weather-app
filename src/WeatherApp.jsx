import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Kashipur",
        temp: 29.15,
        tempMin: 24.15,
        tempMax: 30.15,
        humidity: 76,
        feelsLike: 34.28,
        weather: "Overcast Clouds",
    })

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }
    return(
        <div >
            <h2>Weather App By Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}