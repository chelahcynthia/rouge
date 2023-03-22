import React from "react";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1676377741/rouge/pexels-alesia-kozik-7796597_vy697y.jpg"
          alt="dropper"
        />
      </div>
      <span className="product-title">product-title</span>
      <span className="product-price">Kes. 399</span>
    </div>
  );
}

export default ProductCard;
