/*
{
    name
    size
    price
    quantity
    img
}

*/

const cartReducer = (state = [], action) => {
    let retState = [...state];
    switch(action.type) {
        case 'ADD_CART_ITEM':
            // if same item is already in cart just add to quantity.
            for(let item of retState) {
                if(item.name === action.payload.name &&
                    item.size === action.payload.size &&
                    item.price === action.payload.price) {
                        item.quantity = action.payload.quantity;
                        return retState;
                    }
            }
            return state.concat(action.payload);
        case 'REMOVE_CART_ITEM':
            retState.splice(retState.indexOf(action.payload),1);
            return retState;
        case 'UPDATE_CART_ITEM':
            let updateItem;
            for(const item of retState) {
                if(item.name === action.payload.name &&
                    item.size === action.payload.size &&
                    item.price === action.payload.price) {
                        updateItem = item;
                    }
            }
            retState.splice(retState.indexOf(updateItem), 1, action.payload);
            return retState;
        default:
            return state;
    }
}

export default cartReducer;