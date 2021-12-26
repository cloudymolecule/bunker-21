import React, { Component } from 'react'

class Date extends Component {

    state = {
        year: 2021,
        month: 1,
        day: 10
    }

    render() {

        return (
            <div>
                {this.state.year}
            </div>
        )
    }
}

export default Date
