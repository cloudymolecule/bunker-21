const weather = (state = { weather: [], errors: []}, action) => {
    switch (action.type) {

        case 'ADD_WEATHER':
            return {
                ...state,
                weather: state.weather,
                errors: []
            }

        default:
            return state

    }
}

export default weather

