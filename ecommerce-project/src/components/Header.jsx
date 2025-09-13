import { NavLink } from 'react-router-dom';
import CartIcon from '../assets/image/icons/cart-icon.png';
import SearchIcon from '../assets/image/icons/search-icon.png';
import LogoWhite from '../assets/image/logo-white.png';
import MobileLogoWhite from '../assets/image/mobile-logo-white.png';
import './header.css';

 function Header({ cart }) {

  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity

  });

  

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={LogoWhite} />
          <img className="mobile-logo"
            src={MobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SearchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={CartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;