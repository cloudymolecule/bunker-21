import React from 'react'
import { WeatherGen } from '../../helpers/WeatherGen'

function Weather() {
    return (
        <div>
           {WeatherGen()}
        </div>
    )
}

export default Weather
