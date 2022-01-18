import React, { Component } from 'react'
import { hungerLevels } from '../../constants/hungerLevels'

class Hunger extends Component {
    
    state = {
        currentHungerLevel: hungerLevels[0]
    }

    componentDidMount(){

        let ind = 1

        const hungerInterval = setInterval(() => {
            if (ind === 7) {
                clearInterval(hungerInterval)
            }
            this.setState({
                currentHungerLevel: hungerLevels[ind]
            })
            ind ++
        }, 8000)
    }
    
    render() {
        return (
            <div>
                {this.state.currentHungerLevel}
            </div>
        )
    }
}

export default Hunger

