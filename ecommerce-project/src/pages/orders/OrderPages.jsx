import axios from "axios";
import { useEffect, useState, Fragment } from "react";

import Header from "../../components/Header";

import "./OrderPages.css";
import OrderGrid from './OrdersGrid';
function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrderData = async () => {
    const response = await axios.get("/api/orders?expand=products")
      setOrders(response.data);
    }
    fetchOrderData();
  }, []);
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />

      <Header cart={cart} />

      <OrderGrid orders={orders} />
    </>
  );
}

export default OrdersPage;
