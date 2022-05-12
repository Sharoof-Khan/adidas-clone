import React from 'react'
import Header from './Header'
import HeaderMain from './HeaderMain'
import './HomePage.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

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
          
    </div>
  )
}

export default HomePage