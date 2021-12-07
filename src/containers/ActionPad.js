import React, { Component } from 'react'
import Inventory from '../components/action-pad/Inventory'
import LoadSaveEtc from '../components/action-pad/LoadSaveEtc'
import Robots from '../components/action-pad/Robots'
import Terminal from '../components/action-pad/Terminal'

class ActionPad extends Component {
    render() {
        return (
            <div>
                <Terminal />
                <Inventory />
                <LoadSaveEtc />
                <Robots />
            </div>
        )
    }
}

export default ActionPad