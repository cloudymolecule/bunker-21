import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { Calendar } from '../../helpers/Calendar'


class TimeElapsed extends Component {
    
    render() {
        return (
            <div>
                 {Calendar(this.props.timeEl, 'y')} YEARS <br />
                 {Calendar(this.props.timeEl, 'm')} MONTHS  <br />
                 {Calendar(this.props.timeEl, 'd')} DAYS 
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(TimeElapsed)


