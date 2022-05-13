import React from 'react'
import Header from './Header'
import HeaderMain from './HeaderMain'
import './HomePage.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import NewArrivalsCarousel from '../carousel/NewArrivalsCarousel';
import WhatsHotCarousel from '../carousel/WhatsHotCarousel';
import BestOfAdidasCarousel from '../carousel/BestOfAdidasCarousel';
import HomeBottomStories from './HomeBottomStories';
import GetOff from './GetOff';
import Options from './Options';
import Footer from './Footer';

const HomePage = () => {
  return (
      <div>
          <Header />
          <HeaderMain />
          <div className='runTogether'>
              <p>TOGETHER,LET'S RUN</p>
              <small>From May 23, let's Run For The Oceans and help end plastic waste. Together,Impossible is Nothing</small>
              <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enIN/Images/sustainability-ss22-rfto-educate-hp-mh-03-d_tcm209-880288.jpeg" alt="Run Together" />
              <div>
                  <p>LEARN MORE</p>
                  <ArrowRightAltIcon />
              </div>
          </div>
          <div className="popularRightNow">
              <h1>POPULAR RIGHT NOW</h1>
              <div>

              <span>FACE COVERS</span>
              <span>WHITE SNEAKERS</span>
              <span>SUPER STAR</span>
              <span>ADIDAS ORIGINALS</span>
              <span>ULTRABOOST</span>
              </div>
          </div>

          <div className="gender">
              <h1>WHO ARE YOU SHOPPING FOR?</h1>
              <div className='genderOptions'>
                  <div>

                      <span>MEN</span>
                      <img src="https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/enIN/Images/evergreen-homepage-gender-navigation-men-dt_tcm209-761437.jpg" alt="Men" />
                  </div>
                  <div>
                      <span>WOMEN</span>
                      <img src="https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/enIN/Images/womens_1_tcm209-792193.png" alt="women" />

                  </div>
                  <div>
                      <span>KIDS</span>
                      <img src="https://brand.assets.adidas.com/image/upload/f_auto,fl_lossy,q_1/enIN/Images/kids_1_tcm209-792188.png" alt="Kids" />

                  </div>

              </div>
          </div>
          <NewArrivalsCarousel />
          <WhatsHotCarousel />
          <BestOfAdidasCarousel />
          <HomeBottomStories />
          <GetOff />
          <Options />
          <Footer/>
          
    </div>
  )
}

export default HomePage