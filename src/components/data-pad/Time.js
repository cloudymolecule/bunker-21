import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTime } from '../../actions/time'

class Time extends Component {
    
    state = {
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.seconds === 59) {
                this.setState({
                    seconds: 0,
                    minutes: this.state.minutes + 1
                })
                
            }
            if (this.state.minutes === 59) {

                this.props.addTime(this.state.hours)

                this.setState({
                    minutes: 0,
                    hours: this.state.hours + 1
                })
            }
            if (this.state.hours === 23) {
                this.setState({
                    hours: 0,
                })
            }

            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1);
    }

    processTime = function(){
        let h = this.state.hours.toString()
        let m = this.state.minutes.toString()
        let s = this.state.seconds.toString()
        
        if (h.length === 1) {
            h = '0' + h
        }

        if (m.length === 1) {
            m = '0' + m
        }

        if (s.length === 1) {
            s = '0' + s
        }

        
        
        return `${h}:${m}:${s}`
    }

    render() {
        return (
            <div>
                {this.processTime()}
            </div>
        )
    }
}

export default connect(null, { addTime })(Time)
