import React from 'react'
import '../styles/CompSysTitle.css'

function CompSysTitle() {
    
    function flicker() { // this will flicker the title
        
        function randomInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function quicklySwitchClass() {
            const element = document.getElementById('comp-sys-title')
            let inter = randomInterval(2, 8)
            let counter = randomInterval(2, 8)
            let hello = setInterval(() => {
                if (counter > 0) {
                    if (element.className === 'solid') {
                        element.className = 'flicker'
                        counter -= 1
                    } else {
                        element.className = 'solid'
                        counter -= 1
                    }
                } else {
                    clearInterval(hello)
                    element.className = 'solid'
                }
            }, 50);
        }

        setInterval(() => {
            quicklySwitchClass()
        }, randomInterval(1000, 30000));
    }

    return (
        <div className='comp-sys-title-container'>
            {flicker()}
            <div className='solid' id='comp-sys-title'>
                BUNKER COMPUTER SYSTEMS V2.1.2
            </div>
        </div>
    )
}

export default CompSysTitle