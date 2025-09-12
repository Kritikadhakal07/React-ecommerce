import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
 
// import { products } from "../../starting-code/data/products";
import "./HomePage.css";

import ProductGrid from "./ProductGrid";

function HomePage({cart, loadCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHoneData = async () => {
      const response = await axios.get("/api/products")
      setProducts(response.data);
    }
    getHoneData();

  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart={cart}/>

      <div className="home-page">
       <ProductGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}

export default HomePage;
