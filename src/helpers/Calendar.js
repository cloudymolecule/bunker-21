export const Calendar = function calendar(hours, type) {
    
    if (type === 'h') {
        return hours
    } else if (type  === 'd') {
        return Math.floor(hours / 24)
    } else if (type  === 'm') {
        return Math.floor(hours / 24 / 30)
    } else if (type === 'y') {
        return Math.floor(hours / 24 / 30 /12) 
    } else {
        return 'error'   
    }

    // const hours = time
    // const days = Math.floor(hours / 24)
    // const months = Math.floor(days / 30)
    // const years = Math.floor(months / 12)

    // return {hours, days, months, years}
}