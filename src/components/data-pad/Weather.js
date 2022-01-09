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
        }, Math.floor(Math.random() * 200000) + 50000);
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
