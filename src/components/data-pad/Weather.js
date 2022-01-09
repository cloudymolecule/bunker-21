import React from 'react'
import { WeatherGen } from '../../helpers/WeatherGen'

function Weather() {
    

    function weatherInterval() {
        setInterval(() => {
            console.log('ertert')
            WeatherGen()
        }, 1000);
    }

    // function weatherInterval = setInterval() => {
    //     WeatherGen()
    // }, Math.floor(Math.random() * (1000 + 3000));
    
    return (
        <div>
           {weatherInterval()}
        </div>
    )
}

export default Weather
