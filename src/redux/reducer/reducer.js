import {ADD_TO_CART, REMOVE_FROM_CART} from '../action/actionType'
const initState = {
    cart:[]
}

// console.log(initState.cart,'before');

export const getCartTotal = (cart) =>  
    cart?.reduce((amount,payload) => payload.price + amount,0 )

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
// console.log(state.cart,'after');


            return {
                ...state,
                // cart: action.payload
                cart: [...state.cart, action.payload]
                
            }
        
        case REMOVE_FROM_CART:

            const index = state.cart.findIndex(
                (cart) => cart.id === action.id
            )

            let newCart = [...state.cart]
            if (index >= 0) {
                newCart.splice(index,1)
            } else {
                console.warn(
                    `Cant remove product (id:${action.id}) as its not in cart`
                );
                
            }

            return {
                ...state,
                cart:newCart
            }


            /*return {
                ...state,
                cart: state.cart.filter((el) => el.id !== action.id)
            }*/

        
            
    
        default:

            return state;
    }
    
}