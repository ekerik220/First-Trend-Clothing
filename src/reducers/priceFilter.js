const priceFilterReducer = (state = [10, 50], action) => {
    switch(action.type) {
        case 'CHANGE_PRICE_FILTER':
            return action.payload;
        default:
            return state;
    }
}

export default priceFilterReducer;