import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Homepage from "./pages/home/HomePage.jsx";
import CheckoutPages from "./pages/checkout/CheckoutPages.jsx";
import OrderPages from "./pages/orders/OrderPages.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import Header from "./components/Header.jsx";
import  NotFoundPage  from './pages/Error404.jsx';


function App() {
  const [cart, setCart] = useState([]);
 

  useEffect(() => {
    const fetchAppData = async () => {
      const response = await axios.get("/api/cart-items?expand=product").then((response) => {
        setCart(response.data);
      });
    }
    fetchAppData();
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path = "/" element={<Homepage />}></Route> */}

        <Route index element={<Homepage cart={cart}/>} />

        <Route path="checkout" element={<CheckoutPages cart={cart}/>} />
        <Route path="orders" element={<OrderPages cart={cart}/>} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
        
          <Route path="*" element={<NotFoundPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
