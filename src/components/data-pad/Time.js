import React, { Component } from 'react'

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
        }, 1000);
    }

    processTime = function(){
        return console.log(this.state)
    }

    render() {
        return (
            <div>
                {/* {this.hi()} */}
                {/* {this.state.hours}:{this.state.minutes}:{this.state.seconds} */}
            </div>
        )
    }
}

export default Time
