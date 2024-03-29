import React, { useEffect, useState } from "react";
import ProductsList from "../products/ProductsList";

function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-page">
      <ProductsList products={products} />
    </div>
  );
}

export default Home;
