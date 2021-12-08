import React from 'react'
import '../styles/CompSysTitle.css'

function CompSysTitle() {
    
    function flicker() { // this will flicker the title
        
        function randomInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function quicklySwitchClass() {
            const element = document.getElementById('comp-sys-title')
            for (let i = 1; i < randomInterval(2, 8); i++) {
                setTimeout(() => {
                    if (element.className === 'solid') {
                        element.className = 'flicker'
                    } else {
                        element.className = 'solid'
                    }
                }, 100);
            }
            element.className = 'solid'
            console.log(element.className)

        }

        setInterval(() => {
            quicklySwitchClass()
        }, randomInterval(1000, 20000));
    }

    return (
        <div className='comp-sys-title-container'>
            <div className='solid' id='comp-sys-title'>
                {flicker()}
                BUNKER COMPUTER SYSTEMS V2.1.2
            </div>
        </div>
    )
}

export default CompSysTitle

// BUNKER COMPUTER SYSTEMS V2.1.2