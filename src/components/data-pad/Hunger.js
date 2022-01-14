import React, { Component } from 'react'
import { hungerLevels } from '../../constants/hungerLevels'

class Hunger extends Component {
    
    state = {
        currentHungerLevel: 'Full'
    }
    
    render() {
        return (
            <div>
                {console.log(hungerLevels)}
            </div>
        )
    }
}

export default Hunger