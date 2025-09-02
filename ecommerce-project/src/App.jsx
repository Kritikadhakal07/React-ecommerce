import { Routes, Route } from "react-router";
import Homepage from "./pages/HomePage.jsx";

function App() {
  return (
    <>
    <Routes>
      {/* <Route path = "/" element={<Homepage />}></Route> */}
      <Route index element={<Homepage />} />
      <Route path="checkout" element={<div>Checkout page</div>} />


      

    </Routes>
      
    </>
  );
}

export default App;
