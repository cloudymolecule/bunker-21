import React from 'react'
import { Flicker } from '../helpers/Flicker'
import '../styles/Message.css'
import StoryMess from '../components/message/StoryMess'

function Message() {
    return (
        <div className='message-container' id='message-container'>
            {Flicker('message-container')}
            <StoryMess />
        </div>
    )
}

export default Message
