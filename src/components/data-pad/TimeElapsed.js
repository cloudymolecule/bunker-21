import React, { Component } from 'react'
import { connect } from 'react-redux'
import  { Calendar } from '../../helpers/Calendar'


class TimeElapsed extends Component {
    
    render() {
        return (
            <div>
                {console.log(Calendar(this.props.timeEl))}
                {/* {Calendar(this.props.timeEl)} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(TimeElapsed)