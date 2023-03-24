import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <img
        className="product-image-card"
        src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1676377741/rouge/pexels-alesia-kozik-7796597_vy697y.jpg"
        alt="dropper"
      />
      <div className="product-details-card">
        <span className="product-title-card">product-title</span>
        <span className="product-price-card">Kes. 399</span>
      </div>
    </div>
  );
}

export default ProductCard;
