const time = (state = { time: 0, errors: []}, action) => {
    // console.log(action)
    switch (action.type) {

        case 'ADD_TIME':
            return {
                ...state,
                time: state.time + 1,
                errors: []
            }


        default:
            return state

    }
}

export default time