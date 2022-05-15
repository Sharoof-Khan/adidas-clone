import {ADD_TO_CART} from './actionType'
const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload:payload
})

export {addToCart}