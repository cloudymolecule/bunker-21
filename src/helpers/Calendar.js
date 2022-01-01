export const Calendar = function calendar(time) {
    const hours = time
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)

    return {hours, days, months, years}
}