import React from 'react'
import { useStateValue } from '../../context/StateProvider'
import './CheckoutProduct.css'
// import StarIcon from '@material-ui/icons/Star';
import {useDispatch, useSelector} from 'react-redux'
import { REMOVE_FROM_CART } from '../../redux/action/actionType'
import { removeFromCart } from '../../redux/action/action'


const CheckoutProduct = ({ id, img, title, price }) => {
    
    const dispatch = useDispatch()
    // const [{ cart }, dispatch] = useStateValue();
    const cartItems = useSelector(state => state.cart)
    // console.log('Hello Rahul');
    // console.log(cartItems,'cartItem');

    // const removeFromCart = ()=>{

    //     dispatch({
    //         type: 'REMOVE_FROM_CART',
    //         id:id,
    //     })
    // }
    const handleRemoveFromCart = (id)=>{

        // dispatch({
        //     type: 'REMOVE_FROM_CART',
        //     id:id,
        // })

        const action = removeFromCart(id)

        dispatch(action)

        

    }


  return (
      <div className='checkoutProduct'>
          {/* <h1>Heloo Rahul</h1> */}
          <img className='checkoutProductImg' src={img} alt="Item Img" />
          <div className="checkoutProductInfo">
              <p className="checkoutProductTitle">
                  {title}
              </p>
              <p className="checkoutProductPrice">
                  <small>₹</small>
                  <strong>{ price}</strong>
              </p>
               {/* <button onClick={removeFromCart}>Remove from Cart</button>  */}
               {/* <button onClick={removeFromCart}>Remove from Cart</button>  */}
              <button onClick= { () => handleRemoveFromCart(id)} >Remove from Cart</button>
          </div>
      </div>
  )
}

export default CheckoutProduct