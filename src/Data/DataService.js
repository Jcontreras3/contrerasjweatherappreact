
import {prod, dev} from "./environment.js"


let apiKey = '&units=imperial&APPID=';
if(prod.isLive){
    apiKey += prod.apiKey;
}else{
    apiKey += dev.apiKey;
}

async function WeatherAppData(city){
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    return data;
    
}

async function ForecastAppData(city){
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;
    const res = await fetch(url);
    const Forecastdata = await res.json();
    console.log(Forecastdata)
    return Forecastdata;
    
}

// function ForeCastURL(city){
//     fetch("http://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey)
//     .then(response => response.json()
//     ).then(data => {let forecastData = data 
//         ForecastElements(forecastData)})
        
// }

export{WeatherAppData, ForecastAppData}