import React, { useEffect, useState } from 'react'
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

  const [newArrival, setNewArrival] = useState(null)
  
  useEffect(() => {
    fetch('http://localhost:3001/newArrivals')
      .then((res) => res.json())
    .then((data) => setNewArrival(data))
  }, [])
  
  // newArrival && newArrival.map((e,i) => console.log(newArrival.title,'tit'))
  // console.log(newArrival[2].title,'new');
  // console.log(newArrival,'arri');

  
  // newArrival && newArrival.map((e, i) => console.log(e.title,'srk') )


  return (
      <div className='newArrivalsCarousel'>
      <h1>NEW ARRIVALS</h1>
      <p>VIEW ALL</p>
      

      <Carousel breakPoints={breakPoints} outerSpacing = {0}>
        {newArrival && newArrival.map((e) => (
         
        <NewArrivalsProduct img = {e.img}  id={e.id} title = {e.title} price={e.price} tag = {e.tag} lounch = 'new' />
       ))}
        {/* <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12325"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12326"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12327"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12328"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' />
        <NewArrivalsProduct img = "https://assets.adidas.com/images/w_276,h_276,f_auto,q_auto,fl_lossy,c_fill,g_auto/ae106af7fb33499abdbfad740147d078_9366/MandM'S_Brand_Forum_Low_84_Shoes_White_GY6313_01_standard.jpg"  id="12329"title = 'Superstar Pride Shoes'  price={12999} tag = 'Men originals' lounch = 'new' /> */}
         

          </Carousel>
          {/* <NewArrivalsProduct/> */}


          {/* <StillIntrested /> */}

    </div>
  )
}

export default NewArrivalsCarousel