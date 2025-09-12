import dayjs from "dayjs";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";
import axios from "axios";


function OrderSummary({cart, deliveryOption, loadCart}){
    return(
           <div className="order-summary">
            {deliveryOption.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOption.find(
                  (deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  }
                );

                const deleteCartItem = async() => {
                  await axios.delete(`/api/cart-items/${cartItem.productId}`);
                  await loadCart();


                }


                return (
                  <div key={cartItem.productId} className="cart-item-container">
                    <DeliveryDate selectedDeliveryOption={selectedDeliveryOption}/>

                  <CartItemDetails cartItem={cartItem} deliveryOption={deliveryOption} loadCart={loadCart} deleteCartItem={deleteCartItem}/>
                  </div>
                );
              })}
          </div>
    );
}

export default OrderSummary;