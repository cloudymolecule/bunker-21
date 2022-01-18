import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { Calendar } from '../../helpers/Calendar'


class TimeElapsed extends Component {
    
    state = {
        years : Calendar(this.props.timeEl, 'y'),
        months : Calendar(this.props.timeEl, 'm'),
        days: Calendar(this.props.timeEl, 'd')
    }

    render() {
        return (
            <div>
                 {this.state.years} YEARS <br />
                 {this.state.months} MONTHS  <br />
                 {this.state.days} DAYS 
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(TimeElapsed)


