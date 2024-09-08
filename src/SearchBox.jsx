import Button from '@mui/material/Button';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { red } from '@mui/material/colors';

export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "b8eed16572ddb46696d666608e781763";

    let[city, setCity] = useState("");
    let[error, setError] = useState(false);

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
       } catch (err) {
        throw err;
       }
    }

    function inputHandler(event){
        setCity(event.target.value);
    }

    let submitHandler = async (event) => {
        try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let info =  await getWeatherInfo();
        updateInfo(info);
        } catch (err) {
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={submitHandler}>
                <TextField id="city" label="City Name" variant="outlined" value={city} onChange={inputHandler} required/> <br /> <br />
                <Button variant='contained' size='medium' type='submit'>Search</Button>
                {error && <p style={{color: "red"}}>No such place exists!</p>} 

            </form>
        </div>
    )
}

