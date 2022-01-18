export const CalcDate = function calcDate(time) {
    let year = 2021 // starting year for bunker-21
    if (time / 8760 >= 1) {
        year = Math.floor(year + (time / 8760))
    }
    return year
}