import React from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

function ProductsList() {
  return (
    <div className="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductsList;
