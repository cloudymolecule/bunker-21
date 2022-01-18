import React, { Component } from 'react'
import '../styles/ActionPad.css'
import Inventory from '../components/action-pad/Inventory'
import LoadSaveEtc from '../components/action-pad/LoadSaveEtc'
import Robots from '../components/action-pad/Robots'
import Terminal from '../components/action-pad/Terminal'
import { Flicker } from '../helpers/Flicker'

class ActionPad extends Component {
    render() {
        return (
            <div className='action-pad-container' id='action-pad-container'>
                {Flicker('action-pad-container')}
                <Terminal />
                <Inventory />
                <LoadSaveEtc />
                <Robots />
            </div>
        )
    }
}

export default ActionPad


