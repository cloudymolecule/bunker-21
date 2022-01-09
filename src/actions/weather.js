export const addWeather = weather => {
    return (dispatch) => {
        dispatch({ type: 'ADD_WEATHER', weather})
    }
}