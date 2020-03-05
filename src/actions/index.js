export const incrementCartCount = (incr) => {
    return {
        type: 'INCREMENT_CART_COUNT',
        payload: incr
    }
}

export const decrementCartCount = (decr) => {
    return {
        type: 'DECREMENT_CART_COUNT',
        payload: decr
    }
}

export const showItemPopup = () => {
    return {
        type: 'SHOW_ITEM_POPUP'
    }
}

export const hideItemPopup = () => {
    return {
        type: 'HIDE_ITEM_POPUP'
    }
}

export const setSelectedItem = (item) => {
    return {
        type: 'SET_SELECTED_ITEM',
        payload: item
    }
}

export const toggleTypeFilter = (filter) => {
    return {
        type: 'TOGGLE_TYPE_FILTER',
        payload: filter
    }
}

export const toggleColorFilter = (color) => {
    return {
        type: 'TOGGLE_COLOR_FILTER',
        payload: color
    }
}

export const changeSizeFilter = (size) => {
    return {
        type: 'CHANGE_SIZE_FILTER',
        payload: size
    }
}

export const changePriceFilter = (priceRange) => {
    return {
        type: 'CHANGE_PRICE_FILTER',
        payload: priceRange
    }
}

export const addCartItem = (item) => {
    return {
        type: 'ADD_CART_ITEM',
        payload: item
    }
}

export const removeCartItem = (item) => {
    return {
        type: 'REMOVE_CART_ITEM',
        payload: item
    }
}

export const updateCartItem = (item) => {
    return {
        type: 'UPDATE_CART_ITEM',
        payload: item
    }
}

export const showCart = () => {
    return {
        type: 'SHOW_CART'
    }
}

export const hideCart = () => {
    return {
        type: 'HIDE_CART'
    }
}