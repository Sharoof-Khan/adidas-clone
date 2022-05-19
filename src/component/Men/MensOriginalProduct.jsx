import React from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import './NewArrivalsProduct.css'
import './MensOriginalProduct.css'
import { useDispatch,useSelector } from 'react-redux';
import {addToCart} from '../../redux/action/action'


const MensOriginalProduct = ({id,title,price,tag,img,lounch}) => {
  
  // const cartItems = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const item = {
      id,
      title,
      img,
      price
    }

     const action = addToCart(item)
      dispatch(action)
    setTimeout(() => (
        alert(`Item Added To Cart`)
      ),300)
  /*  const exist = false;
    cartItems.map((cItem) => {
      if (item.id == cItem.id) {
        exist = true
        
      }
      
    })

    if (!exist) {
      
      const action = addToCart(item)
      dispatch(action)
    } else {
      // alert('Item Already Exist')
    }
    */

  }
  
    
    
    
  return (
    <div className='MensOriginalProduct' key={id}>
      <div className='MensOriginalProductTop'>
        <img src={img} alt={title} />
        <FavoriteBorderOutlinedIcon />
        <p>₹ { price}</p>
      </div>
      <div className="productInfo">
        <p>{title}</p>
        <small>{ tag}</small>
        <p>{ lounch}</p>
          </div>

          <button onClick={handleAddToCart }>Add To Cart</button>
          
    </div>
  )
}

export default MensOriginalProduct