import React from 'react'
import Carousel from 'react-elastic-carousel'
import NewArrivalsProduct from './NewArrivalsProduct';
import './NewArrivalsCarousel.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];

const NewArrivalsCarousel = () => {

  return (
      <div className='newArrivalsCarousel'>
          <h1>NEW ARRIVALS</h1>

      <Carousel>
        
        <NewArrivalsProduct img = '' title = 'Superstar Pride Shoes' tag = 'Men originals' lounch = 'new' />

          </Carousel>
          {/* <NewArrivalsProduct/> */}


          {/* <StillIntrested /> */}

    </div>
  )
}

export default NewArrivalsCarousel