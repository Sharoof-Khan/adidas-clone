import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import {getCartTotal} from '../../redux/reducer/reducer'


const Subtotal = () => {

    const cartItems = useSelector(state => state.cart)


    
    // console.log(cartItems,'crtItem');
  return (
      <div className='subtotal'>
          {/* Subtotal */}
          <CurrencyFormat
              renderText={(value) => (
                  <>
                      <p>
                          {/* SubTotal (0 items): */}
                          SubTotal ({ cartItems?.length}items)

                          <strong>{value}</strong>
                      </p>

                      <small className='subtotalGift'>
                          <input type="checkbox" /> This order contains a gift
                      </small>
                  
                  </>
              )}
              decimalScale={2}
              value={getCartTotal(cartItems)}
              displayType={'text'}
              thousandSeparator={true}
              prefix = {" ₹ "}
          />

          <button>Proceed to Checkout</button>
          
    </div>
  )
}

export default Subtotal