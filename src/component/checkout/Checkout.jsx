import React from 'react'
// import {useStateValue} from "../../context/StateProvider"
import { useStateValue } from '../../context/StateProvider';
// import GetOff from '../LandingPage/Header/GetOff';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{cart},dispatch] = useStateValue()

  return (
    <div className='checkout'>
          {/* Checkout */}
          <div className="checkoutLeft">
              {/* <img className='checkoutAdd'
                  src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                  
                  alt="Add" /> */}
              {/* <GetOff   className = "checkoutAdd"   /> */}
              <div>
                  <h2 className="checkoutTitle">
                      Your Shopping Cart

                  </h2>

                  {/* <CheckoutProduct
                      id={2211440}
                      title='This is my product This is my product This is my product This is my product lorem This is my product lorem '
                      image= "https://m.media-amazon.com/images/I/31JjPYpiD2L._AC_SR320,320_.jpg"
                      price={222500}
                      rating = {3}
                  /> */}
                  

                  {cart.map(item => (
                      <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          img={item.img}
                          price={item.price}
                        //   rating = {item.rating}
                      />
                  ))}
                  
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
                      {/* Cart Item */}
              </div>
              
          </div>

          <div className="checkoutRight">
              <Subtotal/>
              {/* <h2>The Subtotal will go here</h2> */}
          </div>
      </div>
  )
}

export default Checkout