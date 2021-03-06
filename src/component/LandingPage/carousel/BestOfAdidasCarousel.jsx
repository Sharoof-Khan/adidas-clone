import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import './BestOfAdidasCarousel.css'
import NewArrivalsProduct from './NewArrivalsProduct';
import {useDispatch,useSelector}  from 'react-redux'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const BestOfAdidasCarousel = () => {

  // const dispatch = useDispatch()
     const [bestOfAdidas, setBestOfAdidas] = useState(null)
  
  useEffect(() => {
    // fetch('http://localhost:3001/bestofadidas')
    fetch('https://sharoof-adidas-clone.herokuapp.com/bestofadidas')
      .then((res) => res.json())
    .then((data) => setBestOfAdidas(data))
  }, [])
  return (
      <div className='bestOfAdidasCarousel'>
          {/* BestOfAdidasCarousel */}
          <h1>BEST OF ADIDAS</h1>
          <Carousel breakPoints={breakPoints}  >
              {bestOfAdidas && bestOfAdidas.map((e) => (
                  <NewArrivalsProduct key={e.id} id={e.id}  title = {e.title} img = {e.img} price = {e.price} tag = {e.tag}  />
                      
              ))}

          </Carousel>

      </div>
  )
}

export default BestOfAdidasCarousel