export const Calendar = function calendar(hours, type) {
    
    if (type === 'h') {
        return hours
    } else if (type  === 'd') {
        const allDays = (hours / 24)
        let days = 0
        for (let i = 0; i < allDays; i++) {
            if (days === 29) {
                days = 0
            } else {
                days ++
            }
        }
        return days
    } else if (type  === 'm') {
        const allMonths = Math.floor((hours / 24) / 30)
        let months = 0
        for (let i = 0; i < allMonths; i++) {
            if (months === 12) {
                months = 0
            } else {
                months ++
            }
        }
        return months
    } else if (type === 'y') {
        return Math.floor(((hours / 24) / 30) / 12) 
    } else {
        return 'error'   
    }
}

