import React, { Component } from 'react'
import '../styles/ActionPad.css'
import Inventory from '../components/action-pad/Inventory'
import LoadSaveEtc from '../components/action-pad/LoadSaveEtc'
import Robots from '../components/action-pad/Robots'
import Terminal from '../components/action-pad/Terminal'
import { Flicker } from '../helpers/Flicker'

class ActionPad extends Component {
    
    state = {
        compDisplayed: 0
    }

    render() {

        let switchComponents = () => {
            if (this.state.compDisplayed === 3) {
                this.setState({
                    compDisplayed: 0
                })
            } else {
                this.setState({
                    compDisplayed: this.state.compDisplayed + 1
                })
            }
        }

        return (
            <div className='action-pad-container' id='action-pad-container'>
                {Flicker('action-pad-container')}
                <button id='action-pad-button' onClick={switchComponents}>switch</button>

                {/* <Terminal />
                <Inventory />
                <LoadSaveEtc />
                <Robots /> */}
            </div>
        )
    }
}

export default ActionPad


