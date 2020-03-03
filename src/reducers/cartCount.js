const cartCountReducer = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT_CART_COUNT':
            return state + action.payload;
        case 'DECREMENT_CART_COUNT':
            return state - action.payload;
        default:
            return state;
    }
}

export default cartCountReducer;