import formatMoney from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions";
import { useState } from "react";
import axios from "axios";

function CartItemDetails({ cartItem, deliveryOption, loadCart, deleteCartItem }) {
  const [isUpdatingQuantity, setIsUpdatingQuantity] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const updateQuantity = async () => {
    if (isUpdatingQuantity) {
      // Save new quantity
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });

      // Refresh cart
      await loadCart();
      setIsUpdatingQuantity(false);
    } else {
      // Switch to edit mode
      setIsUpdatingQuantity(true);
    }
  };

  return (
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} alt={cartItem.product.name} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          ${formatMoney(cartItem.product.priceCents)}
        </div>

        <div className="product-quantity">
          Quantity:{" "}
          {isUpdatingQuantity ? (
            <input
              type="number"
              className="quantity-textbox"
              value={quantity}
              min="1"
              onKeyDown={(event) => {
                if(event.key==='Enter'){
                  updateQuantity();
                }else if(event.key==='Escape'){
                  setIsUpdatingQuantity(false);
                }
              }}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          ) : (
            <span className="quantity-label">{cartItem.quantity}</span>
          )}

          <span
            className="update-quantity-link link-primary"
            onClick={updateQuantity}
          >
            {isUpdatingQuantity ? "Save" : "Update"}
          </span>

          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>

      <DeliveryOptions
        cartItem={cartItem}
        deliveryOption={deliveryOption}
        loadCart={loadCart}
      />
    </div>
  );
}

export default CartItemDetails;
