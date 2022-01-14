import React, { Component } from 'react'
import { sleepLevels } from '../../constants/sleepLevels'

class Sleep extends Component {
    
    state = {
        currentSleepLevel: sleepLevels[0] 
    }

    componentDidMount() {
        let ind = 1

        const sleepInterval = setInterval(() => {
            if (ind === 7) {
                clearInterval(sleepInterval)
            }
            this.setState({
                currentSleepLevel: sleepLevels[ind]
            })
            ind ++
        }, 15000)

    }
    
    render() {
        return (
            <div>
                {this.state.currentSleepLevel}
            </div>
        )
    }
}

export default Sleep