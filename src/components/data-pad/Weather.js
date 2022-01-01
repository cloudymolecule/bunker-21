import React from 'react'
import { WeatherGen } from '../../helpers/WeatherGen'

function Weather() {
    return (
        <div>
           {console.log(WeatherGen())}
        </div>
    )
}

export default Weather
