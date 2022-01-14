import React, { Component } from 'react'
import { thirstLevels } from '../../constants/thirstLevels'

class Thirst extends Component {
    
    state = {
        currentThirstLevel: thirstLevels[0]
    }

    componentDidMount() {
        let ind = 1

        const thirstInterval = setInterval(() => {
            if (ind === 7) {
                clearInterval(thirstInterval)
            }
            this.setState({
                currentThirstLevel: thirstLevels[ind]
            })
            ind ++
        }, 9000)

    }

    render() {
        return (
            <div>
                {this.state.currentThirstLevel}
            </div>
        )
    }
}

export default Thirst