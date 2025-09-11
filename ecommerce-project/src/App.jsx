import { Routes, Route } from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";
import Homepage from "./pages/HomePage.jsx";
import CheckoutPages from "./pages/checkout/CheckoutPages.jsx";
import OrderPages from "./pages/OrderPages.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import Header from "./components/Header.jsx";
import Error404 from "./pages/Error404.jsx";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path = "/" element={<Homepage />}></Route> */}

        <Route index element={<Homepage cart={cart}/>} />

        <Route path="checkout" element={<CheckoutPages cart={cart}/>} />
        <Route path="orders" element={<OrderPages />} />
        <Route path="tracking" element={<TrackingPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
