import axios from "axios";
import { useEffect, useState } from "react";
import CheckoutHeader from "./CheckoutHeader";
import "./CheckoutPage.css";
import formatMoney from "../../utils/money";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";

function CheckoutPages({ cart , loadCart  }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([null]);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
      
        setDeliveryOption(response.data);
      

     response=await axios.get("/api/payment-summary")
      setPaymentSummary(response.data);
   

  
    }
    fetchCheckoutData();
    
  }, [cart]);

  return (
    <>
      <title>Checkout</title>
      <CheckoutHeader />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
        <OrderSummary cart={cart} deliveryOption={deliveryOption} loadCart={loadCart}/>

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPages;
