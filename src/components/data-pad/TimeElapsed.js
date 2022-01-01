import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { Calendar } from '../../helpers/Calendar'


class TimeElapsed extends Component {
    
    render() {
        return (
            <div>
                DAYS: {Calendar(this.props.timeEl, 'd')}
                MONTHS: {Calendar(this.props.timeEl, 'm')}
                YEARS: {Calendar(this.props.timeEl, 'y')}
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(TimeElapsed)