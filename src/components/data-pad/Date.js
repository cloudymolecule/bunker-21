import React, { Component } from 'react'

class Date extends Component {

    state = {
        year: 2022,
        month: 1,
        day: 10
    }

    // componentDidMount() {
    //     const thing = new Date().toISOString().slice(0, 10)
    //     console.log(thing)
    //     // this.setState({
    //     //     year
    //     // })
    // }

    render() {

        return (
            <div>
                {this.state.year}
            </div>
        )
    }
}

export default Date
