import axios from 'axios';
import { GET_ORDERS, CHECKOUT, ORDERS_LOADING, SET_MESSAGE } from './types';

export const getOrders = (id) => dispatch => {
    dispatch({type: ORDERS_LOADING});
    axios.get(`/api/order/${id}`)
        .then(res => dispatch({
            type: GET_ORDERS,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}

export const checkout = (id, source) => dispatch => {
    axios.post(`/api/order/${id}`, {source})
        .then(res => dispatch({
            type: CHECKOUT,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}
