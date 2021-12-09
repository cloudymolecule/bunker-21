import React from 'react'
import { Flicker } from '../../helpers/Flicker'

function Warn() {
    return (
        <div className='warn-container' id='warn-container'>
            {Flicker('warn-container')}
            This is a warning
        </div>
    )
}

export default Warn