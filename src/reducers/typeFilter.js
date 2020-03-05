const defaultState = {
    shirt: false,
    polo: false,
    longSleeve: false,
    sweater: false,
    jacket: false
};

const typeFilterReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'TOGGLE_TYPE_FILTER':
            newState[action.payload] = !newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default typeFilterReducer;