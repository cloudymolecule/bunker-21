import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CalcDate } from '../../helpers/CalcDate'

class Date extends Component {

    render() {

        return (
            <div>
                {CalcDate(this.props.timeEl)}
            </div>
        )
    }
}

const mapStateToProps = state => ({timeEl: state.time.time})

export default connect(mapStateToProps)(Date)