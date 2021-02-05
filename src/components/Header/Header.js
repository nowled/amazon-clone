import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../firebase';

// http://pngimg.com/uploads/amazon/amazon_PNG11.png
// import aImg from '../images/amazon-associates.jpg';

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (auth) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to='/'>
        <img
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='amazon-affiliate'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello Charles</span>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='header__optionLineTwo'>Prime</span>
        </div>
        <Link to='/checkout'>
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLineTwo header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
