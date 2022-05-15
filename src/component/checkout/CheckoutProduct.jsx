import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';


const CheckoutProduct = ({id,img,title,price}) => {
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
              <button>Remove from Cart</button>
          </div>
      </div>
  )
}

export default CheckoutProduct