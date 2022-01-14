import React, { Component } from 'react'

class PowRem extends Component {
    
    state = {
        powerLevel: 100
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                powerLevel: (this.state.powerLevel - 1)
            })
        }, 10000);
    }
    
    render() {
        return (
            <div>
                {this.state.powerLevel}%
            </div>
        )
    }
}

export default PowRem