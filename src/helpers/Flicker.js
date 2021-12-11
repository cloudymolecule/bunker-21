export const Flicker = function flicker(id) { // this will flicker things
        
    function randomInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function quicklySwitchClass() {
        const element = document.getElementById(id)
        let counter = randomInterval(2, 8)
        let switcharoo = setInterval(() => {
            if (counter > 0) {
                if (element.classList.contains('solid')) {
                    element.classList.add('flicker')
                    element.classList.remove('solid')
                    counter -= 1
                } else {
                    element.classList.add('solid')
                    element.classList.remove('flicker')
                    counter -= 1
                }
            } else {
                clearInterval(switcharoo)
                element.classList.remove('flicker')
                element.classList.add('solid')
            }
        }, 50);
    }

    setInterval(() => {
        quicklySwitchClass()
    }, randomInterval(7000, 50000));
}

