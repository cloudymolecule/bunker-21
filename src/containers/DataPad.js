import React from 'react'
import '../styles/DataPad.css'
import BotStat from '../components/data-pad/BotStat'
import Date from '../components/data-pad/Date'
import Hunger from '../components/data-pad/Hunger'
import PowRem from '../components/data-pad/PowRem'
import Sleep from '../components/data-pad/Sleep'
import Thirst from '../components/data-pad/Thirst'
import Time from '../components/data-pad/Time'
import TimeElapsed from '../components/data-pad/TimeElapsed'
import Weather from '../components/data-pad/Weather'
import { Flicker } from '../helpers/Flicker'

function DataPad() {
    return (
        <div className='data-pad-container' id='data-pad-container'>
            
            {Flicker('data-pad-container')}
            
            <div>DATE: <Date /></div>
            <div>TIME: <Time /></div>
            <div>WEATHER: <Weather /></div>
            <div>TIME ELAPSED: <TimeElapsed /></div>
            <div>POWER REMAINING: <PowRem /></div>
            <div>HUNGER: <Hunger /></div>
            <div>THIRST: <Thirst /></div>
            <div>SLEEP: <Sleep /></div>
            <div>BOTSTAT: <BotStat /></div>
            
        </div>
    )
}

export default DataPad

