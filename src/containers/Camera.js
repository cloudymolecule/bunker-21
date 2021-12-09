import React from 'react'
import { Flicker } from '../helpers/Flicker'
import '../styles/Camera.css'


function Camera() {
    return (
        <div className='camera-container' id='camera-container'>
            {Flicker('camera-container')}
            Camera
        </div>
    )
}

export default Camera
