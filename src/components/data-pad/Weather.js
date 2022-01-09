import React, { Component } from 'react'
import { WeatherGen } from '../../helpers/WeatherGen'
    
class Weather extends Component {

    state = {
        pattern: 'Sunny/Clear'
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                pattern: WeatherGen()
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.pattern}
            </div>
        )
    }
}

export default Weather
