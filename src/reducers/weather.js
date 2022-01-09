const weather = (state = { weather: 'Sunny/Clear', errors: []}, action) => {
    switch (action.type) {

        case 'ADD_WEATHER':
            return {
                ...state,
                weather: action.weather,
                errors: []
            }

        default:
            return state

    }
}

export default weather

