const defaultState = {
    red: false,
    orange: false,
    yellow: false,
    green: false,
    blue: false,
    purple: false,
    pink: false
};

const colorFilterReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'TOGGLE_COLOR_FILTER':
            newState[action.payload] = !newState[action.payload];
            return newState;
        default:
            return state;
    }
}

export default colorFilterReducer;