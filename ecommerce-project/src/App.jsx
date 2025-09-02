import { Routes, Route } from "react-router";
import Homepage from "./pages/HomePage.jsx";
import CheckoutPages from "./pages/CheckoutPages.jsx";
import OrderPages from "./pages/OrderPages.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import Header from "./components/Header.jsx";
function App() {
  return (
    <>
    <Routes>
      {/* <Route path = "/" element={<Homepage />}></Route> */}

      <Route index element={<Homepage />} />
      
      <Route path="checkout" element={<CheckoutPages />} />
      <Route path="orders" element={<OrderPages />} />
      <Route path="tracking" element={<TrackingPage />} />


      

    </Routes>
      
    </>
  );
}

export default App;
