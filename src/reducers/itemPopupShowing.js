const itemPopupShowingReducer = (state = false, action) => {
    switch(action.type) {
        case 'SHOW_ITEM_POPUP':
            return true;
        case "HIDE_ITEM_POPUP":
            return false;
        default:
            return state;
    }
}

export default itemPopupShowingReducer;