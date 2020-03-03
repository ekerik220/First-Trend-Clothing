const defaultState = {
    all: true,
    xs: false,
    s: false,
    m: false,
    l: false,
    xl: false
};

const sizeFilterReducer = (state = defaultState, action) => {
    let newState = {...state};
    switch(action.type) {
        case 'CHANGE_SIZE_FILTER':
            for(let i in newState)
                newState[i] = false;
            newState[action.payload] = true;
            return newState;
        default:
            return state;
    }
}

export default sizeFilterReducer;