import React from 'react'
import '../styles/CompSysTitle.css'
import { Flicker } from '../helpers/Flicker'

function CompSysTitle() {
    
    return (
        <div className='comp-sys-title-container' id='comp-sys-title-container'>
            {Flicker('comp-sys-title-container')}
            BUNKER COMPUTER SYSTEMS V2.1.2
        </div>
    )
}

export default CompSysTitle


