const defaultState = {
    all: true,
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false
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