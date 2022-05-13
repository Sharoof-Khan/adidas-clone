// import React from 'react'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import WhatsHotProduct from './WhatsHotProduct';
import './WhatsHotCarousel.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
const WhatsHotCarousel = () => {
  const [whatsHot, setWhatsHot] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/whatsHot')
      .then((res) => res.json())
    .then((data) => setWhatsHot(data))
  }, [])
    
    // console.log(whatsHot,'hot');
    
  return (
      <div className='whatsHotCarousel'>
          <h1>WHATS HOT</h1>
          <Carousel breakPoints={breakPoints} outerSpacing={0} >
              {whatsHot && whatsHot.map((e) => (
                  <WhatsHotProduct id = {e.id} title = {e.title} desc = {e.desc} img = {e.img} action = {e.action} />
              ))}

          </Carousel>

          
    </div>
  )
}

export default WhatsHotCarousel