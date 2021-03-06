import React from 'react'
import './HeaderMain.css'
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HeaderMain = () => {
  const cartItems = useSelector(state => state.cart)
    

  return (
      <div className='headerMain'>
          <div className='topRight'>
              <span>help</span>
              <span>returns</span>
              <span>order tracker</span>
              <span>sign up</span>

          </div>

          <div className='headerMainBottom'>
              <div>
                  <Link to={"/"}>
                  <img className='headerMainBottomImg' src="https://www.adidas.co.in/glass/react/35cdb4d/assets/img/icon-adidas-logo.svg" alt="Logo" />
                  </Link>
                
              </div>
              <div className='headerMainBottomOption'>
                  <Link to={"men"}>
                  <span className='men'>MEN</span>
                 
                  </Link>
                  <span>WOMEN</span>
                  <span>KIDS</span>
                  <span>SPORTS</span>
                  <span>BRANDS</span>
                  <span>COLLECTION</span>
                  <span>OUTLET</span>
              </div>
              <div className='headerMainBottomRight'>
                  <div className="headerMainBottomSearch">
                      <input className='headerMainBottomSearchInput' type="text" placeholder='Search' />
                       <SearchIcon className='headerMainBottomSearchIcon' />
                  </div>
                  <div className='headerMainBottomRightOption'>
                     <p> <PersonOutlineOutlinedIcon/> </p>
                      <p> <FavoriteBorderOutlinedIcon /> </p>
                      
                      <Link to={'checkout'}>
                      
                          <p className='headerMainBottomRightOptionCartLogo'> <ShoppingCartOutlinedIcon /> </p>
                          <span className='headerBasketCount headerMainBottomRightOptionCartCount '>{ cartItems?.length}</span>
                      </Link>
                  </div>
                  

              </div>

          </div>
          
    </div>
  )
}

export default HeaderMain