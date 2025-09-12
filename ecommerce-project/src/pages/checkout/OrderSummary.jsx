import dayjs from "dayjs";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";


function OrderSummary({cart, deliveryOption}){
    return(
           <div className="order-summary">
            {deliveryOption.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOption.find(
                  (deliveryOption) => {
                    return deliveryOption.id === cartItem.deliveryOptionId;
                  }
                );

                return (
                  <div key={cartItem.productId} className="cart-item-container">
                    <DeliveryDate selectedDeliveryOption={selectedDeliveryOption}/>

                  <CartItemDetails cartItem={cartItem} deliveryOption={deliveryOption} />
                  </div>
                );
              })}
          </div>
    );
}

export default OrderSummary;