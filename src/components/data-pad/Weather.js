import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WeatherGen } from '../../helpers/WeatherGen'
import { addWeather } from '../../actions/weather'
    
class Weather extends Component {

    state = {
        pattern: 'Sunny/Clear'
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                pattern: WeatherGen()
            })
            this.props.addWeather(this.state.pattern)
        }, Math.floor(Math.random() * 200000) + 50000)
    }

    render() {
        return (
            <div>
                {this.state.pattern}
            </div>
        )
    }
}

export default connect( null, { addWeather })(Weather)


