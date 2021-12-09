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
            <Date />
            <Time />
            <Weather />
            <TimeElapsed />
            <PowRem />
            <Hunger />
            <Thirst />
            <Sleep />
            <BotStat />
        </div>
    )
}

export default DataPad
