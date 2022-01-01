import React, { Component } from 'react'
import { connect } from 'react-redux'


class TimeElapsed extends Component {
    render() {
        return (
            <div>
                {this.props.timeEl}
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(TimeElapsed)