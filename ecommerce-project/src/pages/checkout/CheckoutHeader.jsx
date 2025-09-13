import { Link } from 'react-router';
import CheckoutLockIcon from '../../assets/image/icons/checkout-lock-icon.png';
import Logo from '../../assets/image/logo.png';
import MobileLogo from '../../assets/image/mobile-logo.png';
import './CheckoutHeader.css';
import { NavLink } from 'react-router-dom';

 function CheckoutHeader( {cart} ) {
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
   totalQuantity += cartItem.quantity;



  });

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <NavLink to="/">
            <img className="logo" src={Logo} />
            <img className="mobile-logo" src={MobileLogo} />
          </NavLink>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<NavLink className="return-to-home-link"
            to="/">{totalQuantity} items</NavLink>)
        </div>

        <div className="checkout-header-right-section">
          <img src={CheckoutLockIcon} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutHeader;