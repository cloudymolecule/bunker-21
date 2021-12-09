import React from 'react'
import { Flicker } from '../helpers/Flicker'
import '../styles/Footer.css'

function Footer() {
    return (
        <div className='footer-container' id='footer-container'>
            {Flicker('footer-container')}
            Copyright © 2021 Dario Carlino
        </div>
    )
}

export default Footer
