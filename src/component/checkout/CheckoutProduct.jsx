import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './CheckoutProduct.css'
// import StarIcon from '@material-ui/icons/Star';


const CheckoutProduct = ({id,img,title,price}) => {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = ()=>{

        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,
        })
    }
  return (
      <div className='checkoutProduct'>
          {/* CheckoutProduct */}
          <img className='checkoutProductImg' src={img} alt="Item Img" />
          <div className="checkoutProductInfo">
              <p className="checkoutProductTitle">
                  {title}
              </p>
              <p className="checkoutProductPrice">
                  <small>₹</small>
                  <strong>{ price}</strong>
              </p>
              <button onClick={removeFromCart}>Remove from Cart</button>
          </div>
      </div>
  )
}

export default CheckoutProduct