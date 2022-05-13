import React from 'react'
import "./WhatsHotProduct.css"


const WhatsHotProduct = ({id,title,desc,img,action}) => {
  return (
      <div className='whatsHotProduct'>
          <div>
              <img src={img} alt={title} />
              <p>{ title}</p>
              <small>{ desc}</small>
              <p className='whatsHotProductAction'>{ action}</p>
          </div>          
    </div>
  )
}

export default WhatsHotProduct