import axios from 'axios';
import { GET_CART, ADD_TO_CART, DELETE_FROM_CART, CART_LOADING, SET_MESSAGE } from './types';
import authHeader from "../services/auth-header";

const API_URL = 'http://localhost:8080';


export const getCart = (id) => dispatch => {
    dispatch({type: CART_LOADING});
    axios.get(API_URL + `/api/cart/${id}`, {headers: authHeader()})
        .then(res => dispatch({
            type: GET_CART,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}

export const addToCart = (id, productId, quantity) => dispatch => {
    axios.post(API_URL + `/api/cart/${id}`,{productId, quantity}) //
        .then(res => dispatch({
            type: ADD_TO_CART,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}

export const deleteFromCart = (userId, itemId) => dispatch => {
    axios.delete(API_URL + `/api/cart/${userId}/${itemId}`,{headers: authHeader()})
        .then(res => dispatch({
            type: DELETE_FROM_CART,
            payload: res.data
        }))
        .catch(err => {
            dispatch({
                type:SET_MESSAGE,
                payload: err.response.data
            });
        });
}
