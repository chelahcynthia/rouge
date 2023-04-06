import React from "react";
import ProductCard from "./ProductCard";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className="product-list">
      {products && products.map((product) => <ProductCard product={product} />)}
    </div>
  );
}

export default ProductsList;
