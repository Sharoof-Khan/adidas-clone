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

      <Carousel breakPoints={breakPoints} outerSpacing = {-20}>
        
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12324" title = 'Superstar Pride Shoes' price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12325"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12326"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12327"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12328"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12329"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />

          </Carousel>
          {/* <NewArrivalsProduct/> */}


          {/* <StillIntrested /> */}

    </div>
  )
}

export default NewArrivalsCarousel