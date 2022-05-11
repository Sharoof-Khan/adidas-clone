import React from 'react'
import AddCardIcon from '@mui/icons-material/AddCard';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import './Header.css'


const Header = () => {
  return (
      <div className='headerContainer'>
          <div>
              <AddCardIcon className='headerIcon' />
              <span>SIGN UP & GET 15 % OFF</span>

          </div>
          <div>
              <AirportShuttleIcon className='headerIcon' />
              <span>FREE DELIVERY FOR ALL ORDER NOW</span>
          </div>
          <div>
              <CompareArrowsIcon className='headerIcon' />
              <span>FREE RETURN </span>
              
          </div>
          
    </div>
  )
}

export default Header