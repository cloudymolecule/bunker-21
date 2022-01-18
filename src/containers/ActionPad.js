import React, { Component } from 'react'
import '../styles/ActionPad.css'
import Inventory from '../components/action-pad/Inventory'
import LoadSaveEtc from '../components/action-pad/LoadSaveEtc'
import Robots from '../components/action-pad/Robots'
import Terminal from '../components/action-pad/Terminal'
import { Flicker } from '../helpers/Flicker'

class ActionPad extends Component {
    
    state = {
        compDisplayed: 0,
        buttonText: 'TERMINAL'
    }

    render() {

        let switchComponents = () => {
            switch(this.state.compDisplayed) {
                case 0:
                    this.setState({
                        compDisplayed: 1,
                        buttonText: 'INVENTORY'
                    })
                    break
                case 1:
                    this.setState({
                        compDisplayed: 2,
                        buttonText: 'LOAD/SAVE'
                    })
                    break
                case 2:
                    this.setState({
                        compDisplayed: 3,
                        buttonText: 'ROBOTS'
                    })
                    break
                case 3:
                    this.setState({
                        compDisplayed: 0,
                        buttonText: 'TERMINAL'
                    })
                    break
                default:
                    console.log('This is a big error, please contact Bunker-21 services')
                    break
            }
        }

        let actuallySwitchComponents = () => {
            switch(this.state.compDisplayed) {
                case 0:
                    return <Terminal />
                case 1:
                    return <Inventory />
                case 2:
                    return <LoadSaveEtc />
                case 3:
                    return <Robots />
                default:
                    console.log('This is a big error, please contact Bunker-21 services')
                    break
            }
        }

        return (
            <div className='action-pad-container' id='action-pad-container'>
                {Flicker('action-pad-container')}
                <button id='action-pad-button' onClick={switchComponents}>{this.state.buttonText}</button>
                {actuallySwitchComponents()}
            </div>
        )
    }
}

export default ActionPad


