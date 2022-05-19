import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import NewArrivalsProduct from '../LandingPage/carousel/NewArrivalsProduct';
import './MensOriginalCarousel.css'
import MensOriginalProduct from './MensOriginalProduct';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];
const MensOriginalCarousel = () => {

    const [menoriginal, setMenoriginal] = useState(null)
    
    useEffect(() => {
        fetch('https://sharoof-adidas-clone.herokuapp.com/mensoriginal')
        
      .then((res) => res.json())
    .then((data) => setMenoriginal(data))
  }, [])

  return (
      <div className='mensOriginalCarousel'>
          <h1>MEN ORIGINALS</h1>
          <p>SHOP MEN</p>

          <Carousel breakPoints={breakPoints}>
              {menoriginal && menoriginal.map((e) => (
                  <MensOriginalProduct key={e.id} img = {e.img}  id={e.id} title = {e.title} price={e.price} tag = {e.tag} />
              ))}

          {/* <NewArrivalsProduct  /> */}

          </Carousel>

          
    </div>
  )
}

export default MensOriginalCarousel