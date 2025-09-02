import { Routes, Route } from "react-router";
import Homepage from "./pages/HomePage.jsx";
import CheckoutPages from "./pages/CheckoutPages.jsx";

function App() {
  return (
    <>
    <Routes>
      {/* <Route path = "/" element={<Homepage />}></Route> */}
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<CheckoutPages />} />


      

    </Routes>
      
    </>
  );
}

export default App;
