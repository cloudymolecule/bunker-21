import React from 'react'
import { Flicker } from '../helpers/Flicker'
import '../styles/Message.css'

function Message() {
    return (
        <div className='message-container' id='message-container'>
            {Flicker('message-container')}
            Message
        </div>
    )
}

export default Message
