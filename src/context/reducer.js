export const initialState = {
    cart: []
    // user:null
    
    
}

//Selector
export const getCartTotal = (cart) =>  
    cart?.reduce((amount,item) => item.price + amount,0 )

    



export const reducer = (state, action) => {

    // console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            };
        default:
            return state;
            
    }

    
}