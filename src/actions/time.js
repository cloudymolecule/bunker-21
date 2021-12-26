export const addTime = time => {
    return (dispatch) => {
        dispatch({ type: 'ADD_TIME', time})
    }
}