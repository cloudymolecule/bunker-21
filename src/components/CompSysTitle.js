import React from 'react'
import '../styles/CompSysTitle.css'
import { Flicker } from '../helpers/Flicker'

function CompSysTitle() {
    
    return (
        <div className='comp-sys-title-container'>
            {Flicker('comp-sys-title')}
            <div className='solid' id='comp-sys-title'>
                BUNKER COMPUTER SYSTEMS V2.1.2
            </div>
        </div>
    )
}

export default CompSysTitle