import React, { Component } from 'react'
import { storyMessages } from '../../constants/storyMessages'

class StoryMess extends Component {
    
    state = {
        currentStoryMessage: storyMessages[0]
    }

    render() {
        return (
            <div>
                {this.state.currentStoryMessage}
            </div>
        )
    }
}

export default StoryMess
