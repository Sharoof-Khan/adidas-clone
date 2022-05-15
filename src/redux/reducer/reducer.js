import {ADD_TO_CART} from '../action/actionType'
const initState = {
    cart:[]
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_CART:

            return{...state,cart:action.payload}
            
    
        default:

            return state;
    }
    
}