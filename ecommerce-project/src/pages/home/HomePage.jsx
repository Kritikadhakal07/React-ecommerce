import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
 
// import { products } from "../../starting-code/data/products";
import "./HomePage.css";

import ProductGrid from "./ProductGrid";
import { useSearchParams } from "react-router";

function HomePage({cart, loadCart}) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      // const response = await axios.get("/api/products")
      const urlPath = search ? `/api/products?search=${search}` : '/api/products';
      const response = await axios.get(urlPath);
      setProducts(response.data);
    }
    getHomeData();

  }, [search]);


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
