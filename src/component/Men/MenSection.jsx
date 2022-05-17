import React from 'react'
// import HeaderMain from '../LandingPage/Header/HeaderMain'
import './MenSection.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MenOption from './MenOption';
import MensOriginalCarousel from './MensOriginalCarousel';
import Footer from '../LandingPage/Header/Footer';
import Options from '../LandingPage/Header/Options';


const MenSection = () => {
  return (
      <div className='menSection'>

          {/* <HeaderMain/> */}
          
                <video loop playsInline autoPlay muted>
                  <source 
                    src='https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-d_wwmaoe.mp4'
                    type='video/mp4'
                  />
               </video>
          
              <h1 className='title'>ULTRRABOOST 22 </h1>
              <p className='desc'>Supreme energy return meets 360 <sup>o</sup> fit improvement.Own your energy and achieve your  impossible.  </p>
              <div className='shopNowBtn'>
                  <p>SHOP NOW</p>
                  <ArrowRightAltIcon />
          </div>
          


          {/*  *******   Mens Option */}

          <MenOption />
      <MensOriginalCarousel />
      <Options/>
      <Footer/>
              
          
              

          
              
              
              
          
          
    </div>
  )
}

export default MenSection