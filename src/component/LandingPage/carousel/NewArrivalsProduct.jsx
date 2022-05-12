import React from 'react'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import './NewArrivalsProduct.css'


const NewArrivalsProduct = ({id,title,price,tag,img,lounch}) => {
  return (
    <div className='NewArrivalsProduct'>
      <div className='NewArrivalsProductTop'>
        <img src={img} alt={title} />
        <FavoriteBorderOutlinedIcon />
        <p>₹ { price}</p>
      </div>
      <div className="productInfo">
        <p>{title}</p>
        <p>{ tag}</p>
        <p>{ lounch}</p>
      </div>
    </div>
  )
}

export default NewArrivalsProduct