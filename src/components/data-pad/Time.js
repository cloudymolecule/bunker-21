import React, { Component } from 'react'

class Time extends Component {
    
    state = {
        hours: '',
        minutes: 0,
        seconds: 0
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.seconds === 59) {
                this.setState({
                    minutes: this.state.minutes + 1
                })
            }




            this.setState({
                seconds: this.state.seconds + 1
            })
        }, 1000);
    }
    
    render() {
        return (
            <div>
                {this.state.seconds}
            </div>
        )
    }
}

export default Time
