import React from "react";
import StarRating from "../reused/StarRating";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div class="card-list">
      <div className="card">
        <div className="card-image">
          <img src={product.image_url} alt="skincare products" />
        </div>
        <div class="card-header">
          <span className="product-title">{product.name}</span>

          <span className="product-price">Kes. {product.price}</span>
        </div>
        <div className="product-card-buttons">
          <button className="cart-btn">VIEW PRODUCT</button>

          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>
      {/* <div>
        <StarRating />
      </div> */}
    </div>
  );
}

export default ProductCard;
