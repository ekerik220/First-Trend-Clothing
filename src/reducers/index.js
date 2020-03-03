import cartCount from './cartCount.js';
import itemPopupShowing from './itemPopupShowing';
import selectedItem from './selectedItem';
import typeFilter from './typeFilter';
import colorFilter from './colorFilter';
import sizeFilter from './sizeFilter';
import priceFilter from './priceFilter';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    cartCount,
    itemPopupShowing,
    selectedItem,
    typeFilter,
    colorFilter,
    sizeFilter,
    priceFilter
});

export default allReducers;