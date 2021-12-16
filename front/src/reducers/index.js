import {combineReducers} from 'redux';
import auth from './auth.reducer';
import message from './message.reducer';
import videos from './video.reducer'
import cart from './cart.reducer';
import order from './order.reducer';


// Instead of creating a store for each reducer, we can combine them in one store using combineReducers
export default combineReducers({
    auth,
    message,
    item: videos,
    cart,
    order
})