import { Fragment, useState } from "react";
import formatMoney from "../../utils/money";
import dayjs from "dayjs";
import BuyAgainIcon from "../../assets/image/icons/buy-again.png";
import { Link } from 'react-router-dom';
import axios from "axios";

function OrdersGrid({ orders, loadCart }) {
  const [addedProductId, setAddedProductId] = useState(null);

  const addToCart = async (productId, quantity) => {
    await axios.post('/api/cart-items', {
      productId,
      quantity
    });
    await loadCart();

    setAddedProductId(productId);

    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <Fragment>
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => {
            return (
              <div key={order.id} className="order-container">
                <div className="order-header">
                  <div className="order-header-left-section">
                    <div className="order-date">
                      <div className="order-header-label">Order Placed:</div>
                      <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                    </div>
                    <div className="order-total">
                      <div className="order-header-label">Total:</div>
                      <div>{formatMoney(order.totalCostCents)}</div>
                    </div>
                  </div>

                  <div className="order-header-right-section">
                    <div className="order-header-label">Order ID:</div>
                    <div>{order.id}</div>
                  </div>
                </div>

                <div className="order-details-grid">
                  {order.products.map((orderProduct) => {
                    return (
                      <Fragment key={orderProduct.product.id}>
                        <div className="product-image-container">
                          <img src={orderProduct.product.image} />
                        </div>

                        <div className="product-details">
                          <div className="product-name">
                            {orderProduct.product.name}
                          </div>
                          <div className="product-delivery-date">
                            {dayjs(orderProduct.estimatedDeliveryTimeMs).format("MMMM D")}
                          </div>
                          <div className="product-quantity">
                            Quantity: {orderProduct.quantity}
                          </div>

                          <button
                            className="buy-again-button button-primary"
                            onClick={() =>
                              addToCart(orderProduct.product.id, orderProduct.quantity)
                            }
                          >
                            <img
                              className="buy-again-icon"
                              src={BuyAgainIcon}
                            />
                            <span className="buy-again-message">
                              {addedProductId === orderProduct.product.id ? "Added!" : "Add to Cart"}
                            </span>
                          </button>
                        </div>

                        <div className="product-actions">
                          <Link to={`/tracking/${order.id}/${orderProduct.product.id}`}>
                            <button className="track-package-button button-secondary">
                              Track package
                            </button>
                          </Link>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default OrdersGrid;
