import React from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
// import './NewArrivalsProduct.css'
import './MensOriginalProduct.css'
import { useStateValue } from '../../context/StateProvider';


const MensOriginalProduct = ({id,title,price,tag,img,lounch}) => {
    const [{ cart }, dispatch] = useStateValue()
    
    
    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                img,
                price,
            },
        })
      
      setTimeout(() => (
        alert(`Item Added To Cart`)
      ),300)
        
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

          <button onClick={ addToCart}>Add To Cart</button>
          
    </div>
  )
}

export default MensOriginalProduct