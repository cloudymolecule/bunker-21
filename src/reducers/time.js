const time = (state = { time: [], errors: []}, action) => {
    switch (action.type) {

        case 'ADD_TIME':
            return {
                ...state,
                time: [...state.time],
                errors: []
            }


        default:
            return state

    }
}

export default time