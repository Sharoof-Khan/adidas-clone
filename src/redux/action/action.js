import {ADD_TO_CART, REMOVE_FROM_CART} from './actionType'
const addToCart = (payload) => ({
    type: ADD_TO_CART,
    payload:payload
})

const removeFromCart = () => ({
    type: REMOVE_FROM_CART
})
export {addToCart,removeFromCart}