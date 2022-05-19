import {ADD_TO_CART, REMOVE_FROM_CART} from './actionType'
const addToCart = (payload) => {
//    console.log(payload,'load')
    return {
        type: ADD_TO_CART,
        payload: payload
       
    }
}

const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    id:id
})
export {addToCart,removeFromCart}