export const Flicker = function flicker() { // this will flicker the title
        
    function randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function quicklySwitchClass() {
        const element = document.getElementById('comp-sys-title')
        let counter = randomInterval(2, 8)
        let switcharoo = setInterval(() => {
            if (counter > 0) {
                if (element.className === 'solid') {
                    element.className = 'flicker'
                    counter -= 1
                } else {
                    element.className = 'solid'
                    counter -= 1
                }
            } else {
                clearInterval(switcharoo)
                element.className = 'solid'
            }
        }, 50);
    }

    setInterval(() => {
        quicklySwitchClass()
    }, randomInterval(1000, 30000));
}